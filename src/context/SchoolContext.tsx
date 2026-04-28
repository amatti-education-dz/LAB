import React, { createContext, useContext, useState, useEffect } from 'react';

interface SchoolContextType {
  schoolId: string;
  setSchoolId: (id: string) => void;
}

const DEFAULT_SCHOOL_ID = 'school_001';
const SCHOOL_ID_KEY = 'algeria_lab_school_id';

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export function SchoolProvider({ children }: { children: React.ReactNode }) {
  const [schoolId, setSchoolIdState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(SCHOOL_ID_KEY) || DEFAULT_SCHOOL_ID;
    }
    return DEFAULT_SCHOOL_ID;
  });

  useEffect(() => {
    localStorage.setItem(SCHOOL_ID_KEY, schoolId);
  }, [schoolId]);

  const setSchoolId = (id: string) => {
    setSchoolIdState(id);
  };

  return (
    <SchoolContext.Provider value={{ schoolId, setSchoolId }}>
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchool() {
  const context = useContext(SchoolContext);
  if (context === undefined) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
}
