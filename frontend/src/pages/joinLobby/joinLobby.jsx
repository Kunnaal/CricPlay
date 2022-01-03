import React from "react";
import styles from "./Resources/CSS/joinLobby.module.css";
import { Button, TextField } from "@mui/material";

function Join() {
  return (
    <div className={styles.backgroundStyle + "" + styles.blur}>
      <form className={styles.formStyle}>
        <h2>Join Lobby</h2>
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id="username" label="Room Id" variant="outlined" />
        <Button>Join</Button>
      </form>
    </div>
  );
}

export default Join;
