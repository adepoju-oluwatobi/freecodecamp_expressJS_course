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
    var response = "Hello json"
   if (MESSAGE_STYLE === uppercase){
        response = "HELLO JSON"
   } else {
        response = "Hello json"
   }
   res.json({
     message: response
   });
})




































 module.exports = app;
