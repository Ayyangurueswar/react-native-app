import React, {createContext, useContext, useEffect, useState} from 'react'
import {auth, storage} from '../firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
  sendPasswordResetEmail, updateEmail, updatePassword, GoogleAuthProvider, signInWithPopup,
  User
 } from 'firebase/auth';
import {ref, uploadBytes} from "firebase/storage";

const initialValues = {
  currentUser: null,
  signUp: (email: string, password: string) => {},
  signIn: (email: string, password: string) => {},
  googleSignIn: () => {},
  logout: () => {},
  resetPwd: (email: string) => {},
  editEmail: (email: string) => {},
  editPassword: (password: string) => {},
  uploadImage: (blob: Blob) => {},
}

const AuthContext = createContext(initialValues);

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({children}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
    });
    return unsuscribe;
  }, []);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const logout = () => {
    return signOut(auth); 
  }

  const resetPwd = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  }

  const editPassword = (newPassword: string) => {
    if(currentUser)
      return updatePassword(currentUser, newPassword);
  }

  const editEmail = (newEmail: string) => {
    if(currentUser)
      return updateEmail(currentUser, newEmail);
  }

  const uploadImage = (blob: Blob) => {
    const storageRef = ref(storage, `images/${Date.now()}.jpg`);
    return uploadBytes(storageRef, blob);
  }

  const value = {
    currentUser,
    signUp,
    signIn,
    logout,
    resetPwd,
    editEmail,
    editPassword,
    googleSignIn,
    uploadImage,
  }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider