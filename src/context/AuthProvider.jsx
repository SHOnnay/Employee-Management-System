import React, { createContext, useEffect, useState } from 'react';
import { getLocaLStorage, setLocaLStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setLocaLStorage();
        const { employees, admin } = getLocaLStorage();
        setUserData({ employees, admin })
    }, [])


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;