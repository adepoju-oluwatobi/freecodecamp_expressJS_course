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

app.get("/json", (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  let response = messageStyle

  if (response == "HELLO JSON")
  {
      res.json({ message: response });
  }
  else{
    res.json({message: "Hello json"})
  }
});



































 module.exports = app;
