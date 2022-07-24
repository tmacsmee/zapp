import React from "react";
import { Link } from "react-router-dom";
import sadCloud from "../assets/cloudy_sad.png";
import error404 from "../assets/error-404.jpg";

export default function Error() {
  return (
    <div className="w-full h-90v flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div>
          <img src={sadCloud} className="w-[80%]" alt="sad cloud"></img>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <img src={error404} alt="error 404"></img>
          <div className="w-full text-3xl text-black font-semibold text-center">
            Oops, an error has occurred
          </div>
          <Link
            to="/"
            className="p-5 rounded-full bg-[color:#020202] text-3xl text-[color:#e7e7e8] text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
