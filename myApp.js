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
    const message_style = process.env.MESSAGE_STYLE;
    var response = "Hello json";
   if (message_style === uppercase) {
        response = response.toUpperCase();
   } else {
     response = "Hello json";
   }
   res.json({
     message: response
   });
});
console.log(message_style);




































 module.exports = app;
