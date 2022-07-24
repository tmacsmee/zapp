import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { AppContext } from "../AppContextProvider";
import { socket } from "../App.js";
import { useContext } from "react";

export default function Login() {
  const [state, dispatch] = React.useContext(UserContext);
  const { setUsername } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");
    const username = usernameElement.value;
    const password = passwordElement.value;
    socket.emit(
      "login-student",
      {
        username: username,
        password: password,
      },
      (result) => {
        if (result) {
          setUsername(username);
        }
      }
    );
  }

  return (
    <div className="animate__animated animate__backInRight animate__faster h-90v flex flex-row justify-center space-x-3">
      {state.active && <Navigate to="/main" replace={true} />}
      <form
        className="w-1/4 flex flex-col justify-center"
        onSubmit={(event) => handleSubmit(event)}
        autoComplete="true"
      >
        <div className="font-semibold text-2xl mb-2">Username:</div>
        <input
          type="text"
          id="username"
          className="form-input rounded text-xl font-semibold"
          placeholder="Enter Your Username Here"
        />
        <div className="font-semibold text-2xl mt-10 mb-2">Password:</div>
        <input
          type="password"
          id="password"
          className="form-input rounded text-xl font-semibold"
          placeholder="Enter Your Password Here"
        />
        <div className="text-base mt-1">
          Doesn't have an account?&nbsp;
          <span className="text-[color:#43655a] cursor-pointer hover:underline">
            Register Here!
          </span>
        </div>
        <div className="flex flex-row w-full mt-10">
          <input
            type="checkbox"
            className="form-checkbox rounded mt-1"
            required
          />
          <div className="w-full text-sm ml-2">
            I have read and agree with the&nbsp;
            <Link
              to="/terms"
              className="text-[color:#43655a] cursor-pointer hover:underline"
            >
              terms and conditions
            </Link>
          </div>
        </div>
        <input
          type="submit"
          className="form-input rounded-full bg-[color:#e8e8e8] mt-3 shadow-lg text-2xl font-bold cursor-pointer hover:text-[color:#43655a]"
          value="Log in"
        />
      </form>
    </div>
  );
}
