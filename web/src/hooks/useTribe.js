import React, { createContext, useState, useContext, useCallback } from 'react';
import { useEffect } from 'react';

const TribeContext = createContext({});

export const TribeProvider = ({ children }) => {
  
  const [selectedTribe, setSelectedTribe] = useState(null);

  useEffect(() => {
    const tribe = window.localStorage.getItem('wb-tribe');
    if(tribe){
      setSelectedTribe(JSON.parse(tribe));
    }
  }, []);

  const handleChangeSelectedTribe = useCallback((value) => {
    setSelectedTribe(value);
    const char = JSON.stringify(value);

    window.localStorage.setItem('wb-tribe', char);
  }, []);

  return (
    <TribeContext.Provider
      value={{ selectedTribe, setSelectedTribe: handleChangeSelectedTribe }}
    >
      {children}
    </TribeContext.Provider>
  );
};

export function useTribe() {
  return useContext(TribeContext);
}