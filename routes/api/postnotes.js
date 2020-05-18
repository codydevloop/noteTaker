const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// const app = require("../../server");


router.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let tempNoteArr = [];  // clear array
    // console.log(req.body);

    //==========================
    // (1) read db.json and place into a temp variable tempNoteArr
    //=========================
    fs.readFile(path.join(__dirname, "../../db/db.json"),"utf8", function(err, data) {
        if (err){
            throw err;
        } 
        tempNoteArr = JSON.parse(data);
        //==========================
        // (2) add incomming note to the temp arrat
        //=========================
        newNote.id = uuidv4();
        tempNoteArr.push(newNote); 
        console.log(tempNoteArr);
        // console.log(tempNoteArr);
        // res.json(JSON.parse(data)); //return all notes to user
        // console.log("Cody"+ tempNoteArr.title);
        // console.log(typeof(tempNoteArr));
        // console.log("type:" + typeof(tempNoteArr));
        
        //==========================
        // overwrite db.json with updated tempNoteArray information
        //=========================
        fs.writeFile(path.join(__dirname, "../../db/db.json"),JSON.stringify(tempNoteArr),(err) => {
            if (err){
                throw err;
            } 
            console.log("Success writing file, API Post");
          });
      }); 
    res.json(newNote); //newNote returned to user
    
});


module.exports = router;