let express = require('express');
const dotenv = require("dotenv");
dotenv.config();
let app = express();
console.log("Hello World");

const absolutePath = __dirname + "/views/index.html";
const path = __dirname + "/public";

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})
app.use("/public", express.static(path));

// Logger middleware
app.use((req, res, next) => {
  const logMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logMessage);
  next();
});

app.get("/json", (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  let message = "Hello json";

  if (messageStyle === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message });
});




































 module.exports = app;
