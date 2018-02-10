const express =require("express");
var dbconfig=require("./Config/db");
const Donors=require("./models/userschema");
const app=express();
const port=4000;
app.get("/api/donors/:bgroup",function(req,res){
  var params=req.params.bgroup
  if(params==="AB")
  {
      Donors.find({}).then(function(response){
      res.json(response)
    }).catch(function(error){
      console.log(error);
    })
  }
  if(params==="O")
  {
      Donors.find({"bloodgroup":params}).then(function(response){
        res.json(response)
      }).catch(function(error){
        console.log(error);
      })
  }
  else
  {
       Donors.find({$or:[{"bloodgroup":params},{"bloodgroup":"O"}]}).then(function(response){
        res.json(response)
      }).catch(function(error){
        console.log(error);
      })
  }
  
})
app.post("/api/savedonors/:user",function(req,res,next){
    var username=req.query.username;
    var email   =req.query.email;
    var address =req.query.address;
    var phoneno =req.query.phoneno;
    var bloodgroup=req.query.bloodgroup;
    var newuser=new Donors({
      "username":username,
      "email"   :email,
      "address" :address,
      "phoneno" :phoneno,
      "bloodgroup":bloodgroup
    }).save(function(error){
      console.log(error);
      
    });
    

    
});
app.listen(port,()=>console.log(`Listening to port ${port}`));
