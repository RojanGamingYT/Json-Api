const express = require("express");
const app = express();

//To change Api link change the > app.get("/api/NAME") Part below.

app.get("/api/NAME", (req, res) => {
  
const items = ["ITEM 1","ITEM 2","ITEM 3","ITEM 4", 
 ];

//To add More items put it under "Like This" or visit RojanGamingYT for Tutorial

 const item = Math.floor(Math.random() * items.length);
 
 res.json({result: items[item] });
});

const listener = app.listen(process.env.PORT, () => {
console.log("Your app is listening on port " + listener.address().port);
console.log("Please Subscribe RojanGamingYT on YouTube");
});
