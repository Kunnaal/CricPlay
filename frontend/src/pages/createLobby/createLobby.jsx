import React from "react";
import styles from "./Resources/CSS/createLobby.module.css";
import { Button, Hidden, TextField } from "@mui/material";

function Create() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className={styles.blurBackground}>
        <div className={styles.backgroundImage}></div>
      </div>
      {/* <i style={{ height: "15%", width: "100%" }}></i> */}
      <div className={styles.flexBox} style={{ overflowY: "hidden" }}>
        <div
          className={styles.foregroundImage}
          style={{ backgroundPosition: "2px -75px" }}
        >
          {/* <img src="../Images/BG_Image.jpg"></img> */}
        </div>
        <div className={styles.formContainer} style={{ height: "100%" }}>
          <div className={styles.formDiv}>
            <h2>Create Lobby</h2>
            <br></br>
            <TextField
              fullWidth
              margin="normal"
              id="username"
              label="Username"
              variant="outlined"
            />
            <br></br>
            <Button>Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
