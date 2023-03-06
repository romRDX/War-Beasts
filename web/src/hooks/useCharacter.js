import React, { createContext, useState, useContext, useCallback } from 'react';
import { useEffect } from 'react';
import { apiWB } from 'services/axios';

const CharacterContext = createContext({});

export const CharacterProvider = ({ children }) => {
  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  console.log("CHARACTER: ", selectedCharacter);

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

  const handleUpdateSelectedCharacter = useCallback((value, type) => {
    setSelectedCharacter(prevValue => ({
      ...prevValue,
      [type]: value,
    }));
    
    const char = JSON.stringify(value);
    
    window.localStorage.setItem('wb-char', char);

    apiWB.put(`/${type}/update`, {
      params: JSON.stringify({
        userId: selectedCharacter.user_id,
        characterId: selectedCharacter.id,
        dataArray: value,
      })
    }).then((resp) => {
      console.log("RESP: ", resp);
    })
  }, [selectedCharacter]);

  return (
    <CharacterContext.Provider
      value={{ selectedCharacter, setSelectedCharacter: handleChangeSelectedCharacter, updateSelectedCharacter: handleUpdateSelectedCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export function useCharacter() {
  return useContext(CharacterContext);
}