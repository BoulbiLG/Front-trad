import React, { createContext, useContext, useState } from 'react';

const GlobalCollection = createContext();

export const useGlobalCollection = () => {
  return useContext(GlobalCollection);
};

export const GlobalProvider = ({ children }) => {
  const [globalCollection, setGlobalCollection] = useState(1);

  return (
    <GlobalCollection.Provider value={{ globalCollection, setGlobalCollection }}>
      {children}
    </GlobalCollection.Provider>
  );
};
