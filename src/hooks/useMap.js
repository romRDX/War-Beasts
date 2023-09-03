import React, { createContext, useState, useContext } from 'react';

const MapContext = createContext({});

export const MapProvider = ({ children }) => {
  
  const [activeMap, setActiveMap] = useState(null);
  const [activeStage, setActiveStage] = useState(null);

  return (
    <MapContext.Provider
      value={{ activeMap, setActiveMap, activeStage, setActiveStage }}
    >
      {children}
    </MapContext.Provider>
  );
};

export function useMap() {
  return useContext(MapContext);
}