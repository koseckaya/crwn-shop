
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, 
    createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword,
    onAuthStateChanged, 
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCKeizpOh_EZhZ3XhhFEvKz81M_UH-yRwo",
    authDomain: "crwn-shop-df05c.firebaseapp.com",
    projectId: "crwn-shop-df05c",
    storageBucket: "crwn-shop-df05c.appspot.com",
    messagingSenderId: "111704774034",
    appId: "1:111704774034:web:a48cee7af0128ba9025d4b"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field)  => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q)

    return  querySnapshot.docs.map((docSnapshot) =>  docSnapshot.data())

 
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.log('error creating the user',  error.message)

        }
    }
    return userDocRef
}

export const createAuthUserWithEmail = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmail = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)