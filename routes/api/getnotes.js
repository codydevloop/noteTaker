const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../../db/db.json"),"utf-8",(err, data) => {
        if (err){
            throw err;
        } 
        res.json(data); //return all notes to user
        console.log(data);
      });    
});

module.exports = router;