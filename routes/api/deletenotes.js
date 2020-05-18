const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

let tempNoteArr = [];  // clear array
let tempArrToWrite = []; //clear array


router.delete("/delete/:id", (req, res) => {
    // fs.readFile(path.join(__dirname, "../../db/db.json"),"utf-8",(err, data) => {
    //     if (err){
    //         throw err;
    //     } 
    //     res.json(JSON.parse(data)); //return all notes to user
    //     console.log("/api/notes GET called");
    //   });    
    let noteID = req.params.id;
    //console.log("deleted note");
    console.log(noteID);
    //===================================
    // (1) read in file db.json to tempNoteArr
    //====================================
    fs.readFile(path.join(__dirname, "../../db/db.json"),"utf-8",(err, data) => {
        if (err){
            throw err;
        } 
        tempNoteArr = JSON.parse(data);
        //===================================
        // (2) find matching ID and remove from array
        //====================================
        
        for (let i = 0; i < tempNoteArr.length; i++){
            if(noteID === tempNoteArr[i].id){
                // delete tempNoteArr[i];
                // console.log("Item to be deleted" +tempNoteArr);
                //console.log("This is NoteID: "+noteID);
                //console.log("This is arrayID :" +tempNoteArr[i].id);
                //tempArrToWrite = tempNoteArr.splice([i],1);
                //console.log(tempArrToWrite);
            }else{
            tempArrToWrite.push(tempNoteArr[i]);
            console.log(tempArrToWrite);
            }
        }
        //===================================
        // (3) overwrite db.json with updated tempNoteArray information
        //====================================
        fs.writeFile(path.join(__dirname, "../../db/db.json"),JSON.stringify(tempArrToWrite),(err) => {
            if (err){
                throw err;
            } 
            console.log("Success deleting file");
          });
        console.log(tempNoteArr);
       
      });  
    res.send("Deletion completed");
});

module.exports = router;