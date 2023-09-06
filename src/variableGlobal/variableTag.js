import React, { createContext, useContext, useState } from 'react';

const GlobalTag = createContext();

export const useGlobalTag = () => {
  return useContext(GlobalTag);
};

export const GlobalProvider = ({ children }) => {
  const [globalTag, setGlobalTag] = useState(1);

  return (
    <GlobalTag.Provider value={{ globalTag, setGlobalTag }}>
      {children}
    </GlobalTag.Provider>
  );
};
