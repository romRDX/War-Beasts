import React, { createContext, useState, useContext, useCallback } from 'react';
import { useEffect } from 'react';
import { apiWB } from 'services/axios';

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

  const handleUpdateSelectedCharacter = useCallback((value) => {
    setSelectedCharacter(value);
    const char = JSON.stringify(value);

    window.localStorage.setItem('wb-char', char);

    apiWB.put('/itens/update', {
      params: JSON.stringify({
        userId: selectedCharacter.user_id,
        characterId: selectedCharacter.id,
        itensArray: value.itens,
      })
    }).then((resp) => {
      console.log(resp);
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