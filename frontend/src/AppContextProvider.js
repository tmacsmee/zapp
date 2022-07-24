import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [student, setStudent] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const context = {
    username,
    setUsername,
    student,
    setStudent,
    questions,
    setQuestions,
    options,
    setOptions,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
