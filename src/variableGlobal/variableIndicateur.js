import React, { createContext, useContext, useState } from 'react';

const GlobalIndicateur = createContext();

export const useGlobalIndicateur = () => {
  return useContext(GlobalIndicateur);
};

export const GlobalProvider = ({ children }) => {
  const [globalIndicateur, setGlobalIndicateur] = useState(1);

  return (
    <GlobalIndicateur.Provider value={{ globalIndicateur, setGlobalIndicateur }}>
      {children}
    </GlobalIndicateur.Provider>
  );
};
