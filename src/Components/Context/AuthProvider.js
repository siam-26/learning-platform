import React from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

//Create Context
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //google popup
    const googlePopUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //GitHub popup
    const githubPopup = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //Create user Email-password for register
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    //signIn with email & password
    const usersignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Update Profile
    const updateProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //Auth Info
    const authInfo = {
        user,
        googlePopUp,
        logOut,
        createUser,
        usersignIn,
        updateProfileUpdate,
        githubPopup,
        loading
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;