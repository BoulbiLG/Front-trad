import React, { createContext, useContext, useState } from 'react';

const GlobalNote = createContext();

export const useGlobalNote = () => {
  return useContext(GlobalNote);
};

export const GlobalProvider = ({ children }) => {
  const [globalNote, setGlobalNote] = useState(1);

  return (
    <GlobalNote.Provider value={{ globalNote, setGlobalNote }}>
      {children}
    </GlobalNote.Provider>
  );
};
