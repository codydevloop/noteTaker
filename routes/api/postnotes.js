const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
// const app = require("../../server");


router.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let tempNoteArr = [];
    // console.log(req.body);

    fs.readFile(path.join(__dirname, "../../db/db.json"),"utf8", function(err, data) {
        if (err){
            throw err;
        } 

        tempNoteArr = JSON.parse(data);
        tempNoteArr.push(newNote); 
        console.log(tempNoteArr);
        // console.log(tempNoteArr);
        // res.json(JSON.parse(data)); //return all notes to user
        // console.log("Cody"+ tempNoteArr.title);
        // console.log(typeof(tempNoteArr));
        // console.log("type:" + typeof(tempNoteArr));
        fs.writeFile(path.join(__dirname, "../../db/db.json"),JSON.stringify(tempNoteArr),(err) => {
            if (err){
                throw err;
            } 
            console.log("Success writing file");
          });
      }); 
    res.json(newNote); //newNote returned to user
    
});


module.exports = router;