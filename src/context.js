import React, { useState, useContext, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [choice, setChoice] = useState(true);
  return (
    <AppContext.Provider value={{ choice, setChoice }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
