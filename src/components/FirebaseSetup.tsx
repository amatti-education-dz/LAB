import { useEffect } from 'react';
import { getDocs, addDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, getUserCollection } from '../firebase';

export default function FirebaseSetup() {
  useEffect(() => {
    const setupData = async () => {
      try {
        const chemicalsSnap = await getDocs(getUserCollection('chemicals'));
        if (chemicalsSnap.empty) {
          const initialChemicals = [
            { name: 'حمض الهيدروكلوريك', formula: 'HCl', cas: '7647-01-0', purity: '37%', storageTemp: '15-25°C', expiryDate: '2026-05-12', quantity: 5.2, unit: 'L', hazardClass: 'Corrosive', location: 'خزانة A-12' },
            { name: 'هيدروكسيد الصوديوم', formula: 'NaOH', cas: '1310-73-2', purity: '98%', storageTemp: 'Room Temp', expiryDate: '2025-08-20', quantity: 2.5, unit: 'kg', hazardClass: 'Corrosive', location: 'خزانة B-04' },
            { name: 'إيثانول', formula: 'C2H5OH', cas: '64-17-5', purity: '95%', storageTemp: 'Cool', expiryDate: '2026-06-20', quantity: 25, unit: 'L', hazardClass: 'Flammable', location: 'خزانة F-01' },
            { name: 'نترات الفضة', formula: 'AgNO3', cas: '7761-88-8', purity: '99.8%', storageTemp: 'Dark', expiryDate: '2024-11-02', quantity: 0.5, unit: 'kg', hazardClass: 'Oxidizer', location: 'خزانة C-02' },
          ];
          for (const chem of initialChemicals) {
            await addDoc(getUserCollection('chemicals'), chem);
          }
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'chemicals');
      }

      try {
        const equipmentSnap = await getDocs(getUserCollection('equipment'));
        if (equipmentSnap.empty) {
          const initialEquipment = [
            { name: 'كؤوس زجاجية 250ml', type: 'glassware', serialNumber: 'PYREX-B250', status: 'functional', totalQuantity: 120, availableQuantity: 108, brokenQuantity: 12 },
            { name: 'مجهر ضوئي رقمي', type: 'tech', serialNumber: 'SN-882190-BZ', status: 'functional', totalQuantity: 4, availableQuantity: 4, brokenQuantity: 0, lastCalibration: '2023-10-12', nextCalibration: '2024-10-12' },
            { name: 'دوارق مخروطية 500ml', type: 'glassware', serialNumber: 'ER-FL500', status: 'functional', totalQuantity: 85, availableQuantity: 79, brokenQuantity: 6 },
          ];
          for (const eq of initialEquipment) {
            await addDoc(getUserCollection('equipment'), eq);
          }
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'equipment');
      }
    };
    setupData();
  }, []);

  return null;
}
