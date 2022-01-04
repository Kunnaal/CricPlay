import React from "react";
import styles from "./Resources/CSS/joinLobby.module.css";
import { Button, Hidden, TextField } from "@mui/material";

function Join() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className={styles.blurBackground}>
        <div className={styles.backgroundImage}></div>
      </div>
      {/* <i style={{ height: "15%", width: "100%" }}></i> */}
      <div className={styles.flexBox} style={{ overflowY: "hidden" }}>
        <div
          className={styles.foregroundImage}
          style={{ backgroundPosition: "0px -75px" }}
        >
          {/* <img src="../Images/BG_Image.jpg"></img> */}
        </div>
        <div className={styles.formContainer} style={{ height: "100%" }}>
          <div className={styles.formDiv}>
            <h2>Join Lobby</h2>
            <br></br>
            <TextField
              fullWidth
              margin="normal"
              id="username"
              label="Username"
              variant="outlined"
            />
            <br></br>
            <TextField
              fullWidth
              margin="normal"
              id="username"
              label="Room Id"
              variant="outlined"
            />
            <br></br>
            <Button>Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
