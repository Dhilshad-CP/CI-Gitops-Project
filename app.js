const express = require("express");
const app = express();

app.get("/", (req,res)=>{
res.send("Updated dilshad versions from CI/CD pipeline 🚀");
});

app.listen(3000, ()=>{
console.log("App running on port 3000");
});
