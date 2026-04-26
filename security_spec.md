# Firestore Security Specification: Multi-User School Roles

## Data Invariants
1. A school namespace (`schools/{schoolId}`) only allows reads/writes by its verified members.
2. A teacher can read but cannot write to inventory collections (`chemicals`, `equipment`, `inventory_cards_registry`).
3. Only a director or the user themselves can edit a `members/{userId}` document.
4. "Update-gaps" are forbidden. Explicit schema checks validate required fields and types for Inventory additions.
5. All legacy endpoints (`users/{userId}/*`) remain strictly isolated to the user.

## The "Dirty Dozen" Payloads

1. **Spoofed Member Access:** Attempting to read `schools/school_123/chemicals` when `members/uid` does not exist. (Fails: isSchoolMember = false)
2. **Teacher Inventory Edit:** A teacher updating a chemical's quantity. (Fails: `canEditInventory` is false, and rule rejects it for `chemicals`)
3. **Escalation to Director:** A labtech altering their member document to `role: "director"`. (Fails: wait, my rule currently says `allow write: if (isDirector(schoolId) || isOwner(userId))`. If a user edits their own doc, they can change their role! This is an "Update Gap" vulnerability!)
4. **Invalid Chemical Scheme:** A director writing a chemical without `quantity`. (Fails: `isValidChemical()` rejects)
5. **String Size DoS:** Submitting a 5MB string for an ID. (Fails: `isValidId(docId)` restricts size)
6. **Cross-School Data Read:** A member of `school_1` reading `school_2`. (Fails: `isSchoolMember("school_2")` evaluates to false)
7. **Phantom Equipment Write:** Submitting bad type string `type: 'super_tech'` for equipment. (Fails: `isValidEquipment` enum validation)
8. **Malicious Subcollection Write:** Teacher creating a fake collection `/schools/123/chemicals/toxic/notes/1`. (Fails: subcollection rule specifies same restrictions)
9. **Legacy Snooping:** Reading another user's legacy `users/{otherUser}` sandbox. (Fails: `isOwner` validation)
10. **Global Delete:** Trying to delete `schools/school_123/chemicals/1` as a teacher. (Fails: `delete` requires `canEditInventory`)
11. **Overwritten Admin:** Director from `school_1` modifing `members` in `school_2`. (Fails: Not a member/director of `school_2`)
12. **The Partial Update Gap:** Using `updateDoc` on equipment where `status` field is missing. (Fails: `hasAll()` requires exhaustive keys, wait, `update` also runs `isValidEquipment` which expects all keys. Strict key check prevents partial updates, which is the current pillar 2 implementation).

## Action Plan
- Vulnerability found in Payload #3: Labtech can escalate themselves. I need to restrict the `members/{userId}` write so non-directors can't modify `role`.
