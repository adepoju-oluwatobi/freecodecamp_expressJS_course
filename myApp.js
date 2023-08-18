let express = require('express');
require("dotenv").config();
let app = express();
console.log("Hello World");

const absolutePath = __dirname + "/views/index.html";
const path = __dirname + "/public";

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})
app.use("/public", express.static(path));

app.get('/json', (req, res) => {
    var message = "Hello json"
   if (MESSAGE_STYLE === uppercase){
        toUpperCase(message)
   } else {
    message = "Hello json"
   }
   res.json({
     message: message,
   });
})




































 module.exports = app;
