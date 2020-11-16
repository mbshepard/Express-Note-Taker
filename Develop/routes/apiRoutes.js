// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var noteData = require("../db/db.json")
var fs = require("fs")
var util = require("util")

const readFileAsync = util.promisify(fs.readFile);



// ===============================================================================
// ROUTING
// ===============================================================================

const notes = []

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------



  app.get("/api/notes", async function(req, res) {
    var readFile = await readFileAsync("./db/db.json", "utf8");
    res.json(readFile)
    });
  
  
  
  app.post("/api/notes", function(req, res){
      
      console.log(req.body)
      notes.push(req.body)
      
      fs.readFile("./db/db.json", (err,data) =>{
        if (err) throw err;
        let oldNote = JSON.parse(data);
        console.log(oldNote);
      }
        )

        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
          if (err) throw err
          console.log('The "notes" were appendedto the file!')
        })
  
      // fs.appendFile("./db/db.json", JSON.stringify(notes), function(err){
      //   if (err) throw err
      //   console.log('The "notes" were appendedto the file!')
      // })
  
  
      })
};