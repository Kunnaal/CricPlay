require("dotenv").config();
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const dbHandler = require("./Utils/DBHandler");
const Router = require("./Router/Router");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", Router); //Router middleware

app.get("/", (req, res) => {
  res.send("<h1>DB @ " + (process.env.PORT || 8000) + "</h1>");
});

dbHandler
  .then((connection) => {
    if (connection) {
      console.log("Connected to DB.");
      app.listen(process.env.PORT || 8000, () => {
        console.log("DB @ " + (process.env.PORT || 8000));
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

io.on("connection", () => {
  console.log("Connection Established!");
});
