import React, { createContext, useContext, useState } from 'react';

const GlobalImage = createContext();

export const useGlobalImage = () => {
  return useContext(GlobalImage);
};

export const GlobalProvider = ({ children }) => {
  const [globalImage, setGlobalImage] = useState(1);

  return (
    <GlobalImage.Provider value={{ globalImage, setGlobalImage }}>
      {children}
    </GlobalImage.Provider>
  );
};
