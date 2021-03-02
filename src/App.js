import React from "react";
import Cookies from "js-cookie";
import Login from "./components/Login";

const App = () => {
  const token = Cookies.get("spotifyAuthToken");
  return <div className="app">{token ? <p>Brawo {token}</p> : <Login />}</div>;
};
export default App;
