var config=require("../Config/db");
var mongoose=require("mongoose");
var donorsschema=module.exports=new mongoose.Schema({
    username:String,
    phoneno :String,
    address :String,
    bloodgroup:String,
    email     :String
});
var Donors=module.exports=mongoose.model("blooddonors",donorsschema);
