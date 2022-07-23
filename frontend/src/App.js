import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import io from "socket.io-client";
import { Button } from "@mantine/core";

const socket = io();

function App() {
  useEffect(() => {
    socket.emit("connection");
    socket.on("timer-update", (time) => {
      console.log(time.min + ":" + time.sec)
    })
    return () => {
      socket.off("timer-update");
    };
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
            socket.emit("create-course", {
              name: "testCourse",
              code: "test123"
            },
              (result) => {
                if (result) {
                  alert("Created Course")
                }
              });
          }}
        >
          Create Course
        </Button>
        <Button
          onClick={() => {
            socket.emit("create-student", {
              username: "testuser",
              password: "testpass",
              name: "test"
            },
              (result) => {
                if (result) {
                  alert("Created Student")
                }
              });
          }}
        >
          Create Student
        </Button>
        <Button
          onClick={() => {
            socket.emit("login-student", {
              username: "testuser",
              password: "testpass",
            },
              (result) => {
                console.log(result)
              });
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            socket.emit("join-course", {
              username: "testuser",
              courseCode: "test123",
            },
              (result) => {
                console.log(result)
              });
          }}
        >
          Join Course
        </Button>
        <Button
          onClick={() => {
            socket.emit("leave-course", {
              username: "testuser",
              courseCode: "test123",
            },
              (result) => {
                console.log(result)
              });
          }}
        >
          Leave Course
        </Button>
        <Button
          onClick={() => {
            socket.emit("create-game", {
              courseCode: "test123",
              gameInfo: {
                questions: ["question1"],
                options: [["a", "b", "c", "d"]],
                answers: [["a"]],
                duration: 5
              }
            },
              (result) => {
                if (result) {
                  alert("Created Game")
                }
              });
          }}
        >
          Create Game
        </Button>
        <Button
          onClick={() => {
            socket.emit("start-game", "test123");
            alert("Started Game");
          }}
        >
          Start Game
        </Button>
        <Button
          onClick={() => {
            socket.emit(
              "join-game",
              "test123",
              (result) => {
                if (result) {
                  console.log(result);
                }
              });
          }}
        >
          Join Game
        </Button>
        <Button
          onClick={() => {
            socket.emit(
              "submit-response",
              {
                courseCode: "test123",
                index: 1,
                response: "a"
              },
              (result) => {
                if (result) {
                  alert("Correct")
                } else {
                  alert("Incorrect")
                }
              });
          }}
        >
          Submit Response
        </Button>
      </header>
    </div>
  );
}

export default App;
