import React, { createContext, useState, useContext, useCallback } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    if(authData === null){
      const authSavedData = window.sessionStorage.getItem('wb-login');
      if(authSavedData){
        setAuthData(JSON.parse(authSavedData));
      }
    }
  }, []);

  const handleAddAuthData = (userData) => {
    window.sessionStorage.setItem("wb-login", JSON.stringify(userData));
    setAuthData(userData);
  };

  return (
    <AuthContext.Provider
      value={{ authData, handleAddAuthData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}