import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const login = async (target) => {
  await Promise.resolve({ username: "test", password: "test" });
};

export default function Login() {
  const [user, setUser] = React.useState();
  const [error, setError] = React.useState();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let user = await login(event.target);
      setUser({ user });
    } catch (error) {
      setError({ error });
    }
  }

  return (
    <div className="animate__animated animate__backInRight animate__faster h-90v flex flex-row justify-center space-x-3">
      {error && <Navigate to="/error" replace={true} />}
      {user && <Navigate to="/main" replace={true} />}
      <form
        className="w-1/4 flex flex-col justify-center"
        onSubmit={(event) => handleSubmit(event)}
        autoComplete="true"
      >
        <div className="font-semibold text-2xl mb-2">Username:</div>
        <input
          type="text"
          className="form-input rounded text-xl font-semibold"
          placeholder="Enter Your Username Here"
        />
        <div className="font-semibold text-2xl mt-10 mb-2">Password:</div>
        <input
          type="password"
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
          <div className="w-full text-base ml-2">
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
