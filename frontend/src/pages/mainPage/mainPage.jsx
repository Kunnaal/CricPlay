import React from "react";
import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:8000/api/");
// const socket = io();

function Main() {
  // socket();
  return <div>Hello frands, chai pilo</div>;
}

export default Main;
