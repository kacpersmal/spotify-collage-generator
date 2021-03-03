import React from "react";
import Cookies from "js-cookie";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const token = Cookies.get("spotifyAuthToken");
  return (
    <div className="app">{token ? <Home token={token} /> : <Login />}</div>
  );
};
export default App;
