const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const blinkLED = require("./gpio/led");
const rotateMotor = require("./gpio/motor");

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile("index.html");
});

io.on("connection", (socket) => {
  console.log("[ socket.io ] - new user connected");

  socket.on("blink", () => {
    rotateMotor();
  });
});

server.listen(3000, () => console.log("[ server ] - running on port 3000"));
