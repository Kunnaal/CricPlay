import React, { useEffect, useState, useRef } from "react";
import SocketIOClient from "socket.io-client";
// import { useState } from "react";

// const socket = io.connect("http://localhost:8000/");
// const socket = io();

function Main() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = SocketIOClient("/");
    setSocket(socket);
  }, []);
  useEffect(() => {
    if (socket) {
      socket.on("response", (_var) => {
        console.log(_var);
      });
    }
  }, [socket]);
  function socketConnection() {
    console.log(`inside socketConnection`);
    socket.emit("click", { name: "KuNNAAl" });
    // socket.on("click", () => {
    //   console.log(`I'm connected with the back-end`);
    // });
  }
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <button onClick={socketConnection}>DTMKC</button>
    </div>
  );
}

export default Main;
