import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    
    // google provider
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true)

        return signInWithPopup(auth,provider)
      
    }


    // create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateUser = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser,updatedData)
    }

    // forgot password
    const forgotPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    // check the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        });
        return()=> {
            unsubscribe();
        }
    },[])


    // sign out user
    const logOutUser = () => {
        return signOut(auth)
    }

    const authData = {
        createUser, signInUser,forgotPassword,updateUser,logOutUser,user,setUser,googleSignIn,loading
    }

    return (
          
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;