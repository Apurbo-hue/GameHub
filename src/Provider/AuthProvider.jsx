import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    
    const [user,setUser]=useState(null)


    // create User
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in User
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // check the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
        createUser, signInUser,logOutUser,user,setUser
    }

    return (
          
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;