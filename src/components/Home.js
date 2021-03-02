import React from "react";
import Cookies from "js-cookie";

const Home = () => {
  const token = Cookies.get("spotifyAuthToken");
  return (
    <div className="app">
      <p>Strona dom</p>
    </div>
  );
};
export default Home;
