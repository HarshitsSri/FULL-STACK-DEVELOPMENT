const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')


const app=express()
app.use(express.urlencoded({extended:true}))
const PORT=3000


app.get("/",function(req,res){
    res.send("hi")
})










app.listen(PORT,function(){
    console.log("Server is running on port: 3000")
})