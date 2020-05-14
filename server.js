// Dependencies
// =============================================================
const path = require("path");
const express = require("express");
const app = express();
// Heroku PORT config 
const PORT = process.env.PORT || 8080;

// Routes
// =============================================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    // res.send("WTF");
});



app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
});