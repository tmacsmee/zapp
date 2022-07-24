import React from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function Teacher() {
  const [state, dispatch] = React.useContext(UserContext);
  return <>{!state.active && <Navigate to="/login" replace={true} />}</>;
}
