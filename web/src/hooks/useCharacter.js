import React, { createContext, useState, useContext, useCallback } from 'react';
import { useEffect } from 'react';

const CharacterContext = createContext({});

export const CharacterProvider = ({ children }) => {
  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const char = window.localStorage.getItem('wb-char');
    if(char){
      setSelectedCharacter(JSON.parse(char));
    }
  }, []);

  const handleChangeSelectedCharacter = useCallback((value) => {
    setSelectedCharacter(value);
    const char = JSON.stringify(value);

    window.localStorage.setItem('wb-char', char);
  }, []);

  return (
    <CharacterContext.Provider
      value={{ selectedCharacter, setSelectedCharacter: handleChangeSelectedCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export function useCharacter() {
  return useContext(CharacterContext);
}