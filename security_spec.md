# security_spec.md - Mekhbari AI Security Specification

## 1. Data Invariants
- **Multi-tenant Isolation:** A user (or technician) can ONLY access data within their own `users/{userId}` sandbox.
- **Relational Integrity:** All lab records (reservations, logs, chemicals) must belong to the authenticated user's ID.
- **Schema Validation:** All writes must match the JSON schema defined in `firebase-blueprint.json` (types, sizes, required fields).
- **Immutable Identity:** Once a document is created, its owner ID (path variable or field) cannot be changed.
- **System Integrity:** Critical fields like `uid` or `createdAt` must match the actual request context (`request.auth.uid`, `request.time`).

## 2. The "Dirty Dozen" Payloads (Red Team Test Cases)

| ID | Target Path | Payload | Attack Vector | Expected Result |
|----|-------------|---------|---------------|-----------------|
| D1 | `users/HACKER/chemicals/1` | `{ name: "Toxic", quantity: 100 }` | Cross-tenant write (Infiltrating other user's sandbox) | `PERMISSION_DENIED` |
| D2 | `users/ME/chemicals/1` | `{ name: "A", quantity: -5 }` | Schema bypass (Negative quantity / Short name) | `PERMISSION_DENIED` |
| D3 | `users/ME/chemicals/1` | `{ name: "Gold", ghst_fld: true }` | Shadow field injection | `PERMISSION_DENIED` |
| D4 | `users/ME/chemicals/1` | `{ name: "Acid", quantity: 10, ownerId: "VICTIM" }` | Identity Spoofing | `PERMISSION_DENIED` |
| D5 | `users/ME/lab_schedule/1` | `{ labName: "Secret", status: "confirmed" }` | Orphaned write (Missing group/teacher) | `PERMISSION_DENIED` |
| D6 | `users/ME/incidents/1` | `{ severity: "none", status: "invalid_status" }` | State Poisoning (Illegal enum value) | `PERMISSION_DENIED` |
| D7 | `users/ME/equipment/1` | `{ name: "Microscope", totalQuantity: "10" }` | Type Poisoning (String instead of Number) | `PERMISSION_DENIED` |
| D8 | `users/VICTIM/reports/1` | GET request | Unauthorized data scraping | `PERMISSION_DENIED` |
| D9 | `users/ME/chemicals/1` | UPDATE `{ quantity: 1000 }` (where existing is owner by VICTIM) | Privilege Escalation | `PERMISSION_DENIED` |
| D10| `users/JUNK_ID_VERY_LONG_STRING.../chemicals/1` | `{ ... }` | Resource Poisoning (Denial of Wallet via long IDs) | `PERMISSION_DENIED` |
| D11| `users/ME/settings/1` | `{ levels: [...10000 items] }` | Array Exhaustion Attack | `PERMISSION_DENIED` |
| D12| `users/ME/chemicals/1` | `{ name: "Old", createdAt: "2000-01-01" }` | Temporal Spoofing (Backdating records) | `PERMISSION_DENIED` |

## 3. Test Runner
A test suite will be implemented in `firestore.rules.test.ts` (using `@firebase/rules-unit-testing`) to execute these payloads against the generated rules.
