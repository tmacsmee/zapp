import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import Main from "./pages/Main";
import Error from "./pages/Error";
import About from "./pages/About";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="main" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
