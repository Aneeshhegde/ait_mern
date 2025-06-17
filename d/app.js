const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hi");
})
app.get("/about",(req,res)=>{
    res.send("about");
});

app.listen(8080,()=>{
    console.log(" yes ");
});