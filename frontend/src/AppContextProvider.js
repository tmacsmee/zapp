import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [username, setUsername] = useState("");

  const context = {
    username,
    setUsername,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
