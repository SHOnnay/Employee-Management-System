import React, { createContext, useEffect, useState } from 'react';
import { getLocaLStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employee, admin } = getLocaLStorage();
        setUserData({ employee, admin })
    }, [])


    return (
        <div>
            <AuthContext.Provider value={"Onnay"}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;