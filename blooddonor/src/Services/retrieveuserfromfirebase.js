import React,{Component} from "react";
import firebase from "../Config/firebase";
let savedata=()=>{
  var bloodgroup=document.getElementById('bloodgroup').value;
  var pleasewait=document.getElementById('pleasewait');
  var notavailable=document.getElementById('notavailable');
  var usernamearr=[];
  var emailarr=[];
  pleasewait.innerHTML="<div class='alert alert-success' style='width:400px;font-size:20px'>Please Wait....</div>";
  var donorsdetail=document.getElementById('donors-detail');
      if(bloodgroup==="A")
      {
        donorsdetail.innerHTML="";
        var ref=firebase.database().ref("users").child("A");
        ref.on('child_added',getresponse);
        function  getresponse(response)
        {
        var object=response.val();
        var username=object.username;
        var email=object.email;
        var bloodgroup=object.bloodgroup;
        var phoneno=object.phoneno;
        var address=object.address;
        pleasewait.innerHTML="";
        donorsdetail.innerHTML+="<tr><td>"+username+"</td><td>"+email+"</td><td>"+bloodgroup+"</td><td>"+phoneno+"</td><td>"+address+"</td></tr>";

        }
      }

      else if(bloodgroup==="B")
      {
        donorsdetail.innerHTML="";
        var ref=firebase.database().ref("users").child("B");
        ref.on('child_added',getresponse);
        function  getresponse(response){
        var object=response.val();
        var name=object.username;
        var email=object.email;
        var bloodgroup=object.bloodgroup;
        var phoneno=object.phoneno;
        var address=object.address;
        pleasewait.innerHTML="";
        donorsdetail.innerHTML+="<tr><td>"+name+"</td><td>"+email+"</td><td>"+bloodgroup+"</td><td>"+phoneno+"</td><td>"+address+"</td></tr>";
      }
    }
      else if(bloodgroup==="O")
      {
        donorsdetail.innerHTML="";
        var ref=firebase.database().ref("users").child("O");
        ref.on('child_added',getresponse);
        function  getresponse(response){
        var object=response.val();
        var username=object.username;
        var email=object.email;
        var bloodgroup=object.bloodgroup;
        var phoneno=object.phoneno;
        var address=object.address;
        pleasewait.innerHTML="";
        donorsdetail.innerHTML+="<tr><td>"+username+"</td><td>"+email+"</td><td>"+bloodgroup+"</td><td>"+phoneno+"</td><td>"+address+"</td></tr>";
        }
      }
      else if(bloodgroup==="AB")
      {
        donorsdetail.innerHTML="";
        var ref=firebase.database().ref("users").child("AB");
        ref.on('child_added',getresponse);
        function  getresponse(response){
        var object=response.val();
        var username=object.username;
        var email=object.email;
        var bloodgroup=object.bloodgroup;
        var phoneno=object.phoneno;
        var address=object.address;
        pleasewait.innerHTML="";
        donorsdetail.innerHTML+="<tr><td>"+username+"</td><td>"+email+"</td><td>"+bloodgroup+"</td><td>"+phoneno+"</td><td>"+address+"</td></tr>";
        }
      }
    }


export default savedata;
