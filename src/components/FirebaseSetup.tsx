import { useEffect } from 'react';
import { getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, getUserCollection, auth } from '../firebase';
import { useSchool } from '../context/SchoolContext';

export default function FirebaseSetup({ onComplete }: { onComplete?: () => void }) {
  const { schoolId } = useSchool();

  useEffect(() => {
    let isMounted = true;
    
    const setupData = async () => {
      if (!auth.currentUser || !schoolId) {
        if (onComplete) onComplete();
        return;
      }
      
      console.log('FirebaseSetup: Starting setup for user', auth.currentUser.uid, 'at schoolId', schoolId);
      
      try {
        // 1. Bootstrap: Ensure user is a school member as 'director'
        try {
          const memberRef = doc(db, 'schools', schoolId, 'members', auth.currentUser.uid);
          const memberSnap = await getDoc(memberRef);
          
          if (!memberSnap.exists()) {
            console.log('FirebaseSetup: Bootstrapping member');
            await setDoc(memberRef, {
              uid: auth.currentUser.uid,
              email: auth.currentUser.email,
              role: 'director',
              displayName: auth.currentUser.phoneNumber || auth.currentUser.email?.split('@')[0] || 'Admin',
              joinedAt: new Date().toISOString()
            }, { merge: true });
          }
        } catch (error) {
          console.error('FirebaseSetup: Bootstrap member error:', error);
        }

        // 2. Seed initial chemicals if collection is empty
        try {
          const chemicalsSnap = await getDocs(getUserCollection(schoolId, 'chemicals'));
          if (chemicalsSnap.empty) {
            console.log('FirebaseSetup: Seeding initial chemicals');
            const initialChemicals = [
              { nameEn: 'Hydrochloric Acid', nameAr: 'حمض الهيدروكلوريك', formula: 'HCl', casNumber: '7647-01-0', storageTemp: '15-25°C', expiryDate: '2026-05-12', quantity: 5.2, unit: 'L', hazardClass: 'danger', state: 'liquid', ghs: ['GHS05', 'GHS07'], shelf: 'خزانة A-12', notes: 'تركيز 37%' },
              { nameEn: 'Sodium Hydroxide', nameAr: 'هيدروكسيد الصوديوم', formula: 'NaOH', casNumber: '1310-73-2', storageTemp: 'Room Temp', expiryDate: '2025-08-20', quantity: 2.5, unit: 'kg', hazardClass: 'danger', state: 'solid', ghs: ['GHS05'], shelf: 'خزانة B-04', notes: 'نقاوه 98%' }
            ];
            for (const chem of initialChemicals) {
              await addDoc(getUserCollection(schoolId, 'chemicals'), chem);
            }
          }
        } catch (error) {
          console.warn('FirebaseSetup: Could not seed chemicals:', error);
        }

        // 3. Seed initial equipment if collection is empty
        try {
          const equipmentSnap = await getDocs(getUserCollection(schoolId, 'equipment'));
          if (equipmentSnap.empty) {
            console.log('FirebaseSetup: Seeding initial equipment');
            const initialEquipment = [
              { name: 'كؤوس زجاجية 250ml', type: 'glassware', serialNumber: 'PYREX-B250', status: 'functional', totalQuantity: 120, availableQuantity: 108, brokenQuantity: 12 },
              { name: 'مجهر ضوئي رقمي', type: 'tech', serialNumber: 'SN-882190-BZ', status: 'functional', totalQuantity: 4, availableQuantity: 4, brokenQuantity: 0, lastCalibration: '2023-10-12', nextCalibration: '2024-10-12' }
            ];
            for (const eq of initialEquipment) {
              await addDoc(getUserCollection(schoolId, 'equipment'), eq);
            }
          }
        } catch (error) {
          console.warn('FirebaseSetup: Could not seed equipment:', error);
        }
      } catch (err) {
        console.error('FirebaseSetup: Global error in setupData:', err);
      } finally {
        if (isMounted) {
          console.log('FirebaseSetup: Setup finished');
          if (onComplete) onComplete();
        }
      }
    };

    setupData();

    // Safety timeout: If setup takes longer than 8 seconds, force complete
    const timeout = setTimeout(() => {
      if (isMounted) {
        console.warn('FirebaseSetup: Setup timed out, forcing complete');
        if (onComplete) onComplete();
      }
    }, 8000);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [onComplete, schoolId]);

  return null;
}
