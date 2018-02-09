import React from "react";
import firebase from "../Config/firebase";
const createuser =()=>{
  var email   =document.getElementById('email').value;
  var username=document.getElementById('username').value;
  var bloodgroup=document.getElementById('bloodgroup').value;
  var address =document.getElementById('address').value;
  var phoneno=document.getElementById('phoneno').value;
  // var latitude=document.getElementById('latitude').value='';
  // var longitude=document.getElementById('longitude').value='';
  var errors=document.getElementById('error');
  if(username===""){
    errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Username is Required</div>"
  }
  else if(email===""){
    errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Enter a Valid Email Address</div>"
  }
  else if(bloodgroup===""){
    errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Select Your Blood Group</div>"
  }
  else if(address===""){
    errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'> Please Provide Your Address</div>"
  }
  else if(phoneno===""){
    errors.innerHTML="<div class='alert alert-warning' style='width:400px;height:auto'>Please Provide Your Mobile Number</div>"
  }
  else{
    var pleasewait=document.getElementById('pleasewait');
    pleasewait.innerHTML="<div class='alert alert-warning' style='width:300px'>Submitting Your Details .....</div>"
    var user={
      username:username,
      email:email,
      bloodgroup:bloodgroup,
      address:address,
      phoneno:phoneno,
    }
    if(bloodgroup==="A")
    {
      firebase.database().ref("users").child("A").push().set(user).then(function(response){
          console.log("successfully Sign Up");

      }).catch(function(error){
          console.log("error in saving");
      });
      firebase.database().ref("users").child("AB").push().set(user).then(function(response){
          console.log("successfully Sign Up");
            alert("successfully submitted");
          window.location="/";
      }).catch(function(error){
          console.log("error in saving");
      });
    }
    else if(bloodgroup==="B")
    {
      firebase.database().ref("users").child("B").push().set(user).then(function(response){
          console.log("successfully Sign Up");

      }).catch(function(error){
          console.log("error in saving");
      });
      firebase.database().ref("users").child("AB").push().set(user).then(function(response){
          console.log("successfully Sign Up");
            alert("successfully submitted");
          window.location="/";
      }).catch(function(error){
          console.log("error in saving");
      });
    }
    else if(bloodgroup==="O")
    {
      firebase.database().ref("users").child("O").push().set(user).then(function(response){
        console.log("successfully Save in O");

      }).catch(function(error){
        console.log("error in saving into O");
      });;
      firebase.database().ref("users").child("A").push().set(user).then(function(response){
        console.log("successfully save to A");
      }).catch(function(error){
        console.log("error in saving A");
      });
      firebase.database().ref("users").child("B").push().set(user).then(function(response){
        console.log("successfully save into B");

      }).catch(function(error){
        console.log("error in saving B");

      })
      firebase.database().ref("users").child("AB").push().set(user).then(function(response){
        console.log("successfully save into AB");
          alert("successfully submitted");
          window.location="/";
      }).catch(function(error){
        console.log("error in saving AB");

      })
    }
    else if(bloodgroup==="AB")
    {
      firebase.database().ref("users").child("AB").push().set(user).then(function(response){
          console.log("successfully Sign Up");
          window.location="/";
      }).catch(function(error){
          console.log("error in saving");
      });;
    }

  }
}

export default createuser;
