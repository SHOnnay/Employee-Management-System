import React, { createContext, useEffect, useState } from 'react';
import { getLocaLStorage, setLocaLStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setLocaLStorage();
        const { employees } = getLocaLStorage();
        setUserData( employees )
    }, [])


    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;