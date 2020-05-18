const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.delete("/delete/:id", (req, res) => {
    // fs.readFile(path.join(__dirname, "../../db/db.json"),"utf-8",(err, data) => {
    //     if (err){
    //         throw err;
    //     } 
    //     res.json(JSON.parse(data)); //return all notes to user
    //     console.log("/api/notes GET called");
    //   });    
    console.log("deleted note");
});

module.exports = router;