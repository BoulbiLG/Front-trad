import React, { createContext, useContext, useState } from 'react';

const GlobalStrategie = createContext();

export const useGlobalStrategie = () => {
  return useContext(GlobalStrategie);
};

export const GlobalProvider = ({ children }) => {
  const [globalStrategie, setGlobalStrategie] = useState(1);

  return (
    <GlobalStrategie.Provider value={{ globalStrategie, setGlobalStrategie }}>
      {children}
    </GlobalStrategie.Provider>
  );
};
