const express =require("express");
var dbconfig=require("./Config/db");
const Donors=require("./models/userschema");
const app=express();
const port=4000;
app.get("/api/donors",function(req,res){
    Donors.find({}).then(function(response){
      res.json(response)
    }).catch(function(error){
      console.log(error);
    })
})
app.listen(port,()=>console.log(`Listening to port ${port}`));
