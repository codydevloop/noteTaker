const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");


router.post("/api/notes", (req, res) => {
    const newNote = JSON.stringify(req.body);
    //const newNote = req.body;
    fs.appendFile(path.join(__dirname, "../../db/db.json"), newNote, (err)=>{
        if (err) throw err;
        console.log(`Data to be appended ${newNote}`);
    });

    res.json(newNote); //newNote returned to user

    // console.log(newNote);
    //notesArr.push(newNote);
    //console.log(JSON.stringify(notesArr));
    
});

module.exports = router;