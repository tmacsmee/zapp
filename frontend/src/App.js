import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import Main from "./pages/Main";
import Error from "./pages/Error";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Nav from "./components/Nav/Nav";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="main" element={<Main />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
