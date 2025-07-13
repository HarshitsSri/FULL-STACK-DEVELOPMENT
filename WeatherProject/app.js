
const express=require("express");
const bodyParser=require("body-parser")
const https=require("https");
require('dotenv').config();

const apiKey = process.env.Api_Key;




const app=express();
app.use(express.urlencoded({ extended: true }));





app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html") 
})
app.post("/",function(req,res){
    var location=req.body.location
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    https.get(url,function(response){
       
        response.on("data",function(data){
            const weathterData=JSON.parse(data)
            var temp=weathterData.main.temp;
            res.send("the temp in "+location+" is "+temp+"degree celcius");


        })
    })

})


app.listen(3000,function(){
    console.log("Server is running on port : 3000");
})