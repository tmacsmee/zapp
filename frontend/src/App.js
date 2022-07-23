import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import io from "socket.io-client";
import { Button } from "@mantine/core";

const socket = io();

function App() {
  useEffect(() => {
    socket.emit("connection");
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          onClick={() => {
            socket.emit("create-room");
          }}
        >
          Click me
        </Button>
      </header>
    </div>
  );
}

export default App;
