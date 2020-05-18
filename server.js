// Dependencies
// =============================================================
const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();  
app.use(express.json()); // let express know that incomming/post is JSON
app.use(express.urlencoded({extended:true})); //required when taking data from HTML forms
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;  // Heroku PORT config 


// Routes
// =============================================================
const getIndexHTML = require("./routes/html/index");
app.use("/", getIndexHTML);

const getNotesHTML = require("./routes/html/notes");
app.use("/", getNotesHTML);

const getNotesAPI = require("./routes/api/getnotes");
app.use("/", getNotesAPI);

const postNoteAPI = require("./routes/api/postnotes");
app.use("/", postNoteAPI);



// Listener 
// =============================================================
app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
});

module.exports = app;