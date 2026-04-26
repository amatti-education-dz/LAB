import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, enableIndexedDbPersistence, setLogLevel } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);
export const db = (firebaseConfig as any).firestoreDatabaseId 
  ? getFirestore(app, (firebaseConfig as any).firestoreDatabaseId)
  : getFirestore(app);

// Initialize Analytics gracefully
export const analytics = (() => {
  if (typeof window === 'undefined') return null;
  try {
    // Only attempt to initialize if measurementId is present
    if (firebaseConfig.measurementId) {
      return getAnalytics(app);
    }
    return null;
  } catch (error) {
    console.warn('Firebase Analytics failed to initialize:', error);
    return null;
  }
})();

// Suppress Firestore offline warnings which are completely normal for a PWA
setLogLevel('silent');

// Enable Offline Persistence
if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support all of the features required to enable persistence');
    }
  });
}

export const auth = getAuth(app);

// Set persistence to LOCAL to handle mobile redirects better
if (typeof window !== 'undefined') {
  setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.error("Error setting persistence:", err);
  });
}

export const storage = getStorage(app);

export const getCurrentSchoolId = () => {
  return localStorage.getItem('currentSchoolId') || 'school_123';
};

/**
 * Gets a user-scoped collection reference.
 * Path: schools/{schoolId}/{collectionName}
 */
export const getUserCollection = (collectionName: string) => {
  if (!auth.currentUser) {
    console.error("DEBUG: getUserCollection called without auth.currentUser. Collection:", collectionName);
    throw new Error("User must be authenticated to access personal data");
  }
  const schoolId = getCurrentSchoolId();
  const path = `schools/${schoolId}/${collectionName}`;
  console.log(`DEBUG: Getting collection at path: ${path}`);
  return collection(db, 'schools', schoolId, collectionName);
};



export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const currentUid = auth.currentUser?.uid;
  
  console.error("DEBUG FLOG: handleFirestoreError called.", { 
    operationType, 
    path, 
    currentUid, 
    errorMessage 
  });

  if (errorMessage.includes('the client is offline') || errorMessage.includes('Failed to get document from cache')) {
    const offlineMsg = "أنت في وضع عدم الاتصال (Offline). يتم استخدام البيانات المحفوظة محلياً، وسيتم المزامنة تلقائياً عند عودة الاتصال.";
    console.log(offlineMsg);
    
    // We still throw an error so the calling function knows the operation couldn't fully complete via network (if it was forcing network), 
    // but with a friendly message instead of a scary configuration warning.
    throw new Error(JSON.stringify({
      error: offlineMsg,
      isOffline: true,
      operationType,
      path,
      originalError: errorMessage
    }));
  }

  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default app;
