import React, { createContext, useContext, useState } from 'react';

const GlobalTrade = createContext();

export const useGlobalTrade = () => {
  return useContext(GlobalTrade);
};

export const GlobalProvider = ({ children }) => {
  const [globalTrade, setGlobalTrade] = useState(1);

  return (
    <GlobalTrade.Provider value={{ globalTrade, setGlobalTrade }}>
      {children}
    </GlobalTrade.Provider>
  );
};
