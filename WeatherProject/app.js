const { log } = require("console");
const express=require("express");
const https=require("https");


const app=express();

app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=42be652d4ce8ddbd75183f52fde01785"
    https.get(url,function(response){
       
        response.on("data",function(data){
            console.log(JSON.parse(data))
        })
    })
    res.send("h1")
})

app.listen(3000,function(){
    console.log("Server is running on port : 3000");
})