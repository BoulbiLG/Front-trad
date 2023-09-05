import React, { createContext, useContext, useState } from 'react';

const GlobalRemplissage = createContext();

export const useGlobalRemplissage = () => {
  return useContext(GlobalRemplissage);
};

export const GlobalProvider = ({ children }) => {
  const [globalRemplissage, setGlobalRemplissage] = useState(1);

  return (
    <GlobalRemplissage.Provider value={{ globalRemplissage, setGlobalRemplissage }}>
      {children}
    </GlobalRemplissage.Provider>
  );
};
