require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");

// const dbHandler = require("./Utils/DBHandler");
const Router = require("./Router/Router");

var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", Router); //Router middleware

http.listen(process.env.PORT || 8000, () => {
  console.log(`listening on :${process.env.PORT || 8000}`);
});

app.get("/", (req, res) => {
  res.send("<h1>DB @ " + (process.env.PORT || 8000) + "</h1>");
});

io.on("connection", (socket) => {
  socket.on("click", ({ name: name }) => {
    socket.emit("response", "DTMKC");
    console.log("Connected:" + name);
  });
  console.log("Connection Established!");
});
