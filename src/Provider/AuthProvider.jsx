import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    
    // google provider
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth,provider)
      
    }


    // create User
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
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
        createUser, signInUser,logOutUser,user,setUser,googleSignIn,loading
    }

    return (
          
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;