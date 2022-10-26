import React from 'react';
import { createContext } from "react";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const user = { displayName: 'bbb' };

    const authInfo = { user };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;