import React, { Component } from "react";
const getdata=()=>{
  var donorsdetail=document.getElementById('donors-detail');
  donorsdetail.innerHTML="";
  var bloodgroup=document.getElementById('bloodgroup').value;
  fetch("/api/donors/"+bloodgroup,{
    method:'GET'
  }).then(res=>res.json()).then(json=>{
    donorsdetail.innerHTML="<th>Username</th><th>Email</th><th>Blood Group</th><th>Address</th><th>Phone Number</th>";
  for(var i=0;i<json.length ;i++){
    donorsdetail.innerHTML+="<tr><td>"+json[i].username+"</td><td>"+json[i].email+"</td><td>"+json[i].bloodgroup+"</td><td>"+json[i].phoneno+"</td><td>"+json[i].address+"</td></tr>";

  }
  
  });
  
}

export default getdata;
