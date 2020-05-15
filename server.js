// Dependencies
// =============================================================
const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();  

app.use(express.json()); // let express know that incomming/post is JSON
app.use(express.urlencoded({extended:true})); //required when taking data from HTML forms

const PORT = process.env.PORT || 8080;  // Heroku PORT config 

const notesArr = [];

// Routes
// =============================================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"),"utf8",(err, data) => {
        if (err) throw err;
        console.log(data);
      });
    
    res.send("its working");

});


app.post("/api/notes", (req, res) =>{
    const newNote = req.body;
    console.log(newNote);
    //notesArr.push(newNote);
    //console.log(JSON.stringify(notesArr));
    res.json(newNote);
    
});


// Listener 
// =============================================================
app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
});