import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import Grid from "@material-ui/core/Grid";
import "../css/Login.css";
const Login = () => {
  return (
    <div className="Login" style={{ justifyContent: "center" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <h1>Spotify Collage Generator And Stats</h1>

        <Grid
          item
          xs={3}
          style={{ textAlign: "center" }}
          className="login-form"
        >
          <SpotifyAuth
            redirectUri="https://kacpersmal.github.io/spotify-collage-generator/callback"
            clientID="1a70ba777fec4ffd9633c0c418bdcf39"
            scopes={[Scopes.userReadPrivate, "user-top-read"]}
          />
          <p>Don't worry! I can't hack you :)</p>
          <p>
            I'm using spotify auth API it is secure and I don't have any access
            to your credentials!
          </p>
          <p>By Kacper Smal </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Login;
