import React from "react";
const postdata = ()=>{
    var errors=document.getElementById('errors');
    var username=document.getElementById('username').value;
    var bloodgroup=document.getElementById('bloodgroup').value;
    var email=document.getElementById('email').value;
    var phoneno=document.getElementById('phoneno').value;
    var address=document.getElementById('address').value;
    if(username.length<=0)
    {
        errors.innerHTML="<div style='width:300px' class='alert alert-danger'>Please Provide Your Username</div>";
    }
    if(email.length<=0)
    {
        errors.innerHTML="<div style='width:300px' class='alert alert-danger'>Please Provide Your Email</div>";
    }
    if(phoneno.length<=0)
    {
        errors.innerHTML="<div style='width:300px' class='alert alert-danger'>Please Provide Your Phone Number</div>";
    }
    if(address.length<=0)
    {
        errors.innerHTML="<div style='width:300px' class='alert alert-danger'>Please Provide Your Full Address</div>";
    }
    if(!bloodgroup)
    {
        errors.innerHTML="<div style='width:300px' class='alert alert-danger'>Please Provide Your Blood Group</div>";
    }
    
   else{
            var savedata=fetch("/api/savedonors/users?username="+username+"&&email="+email+"&&bloodgroup="+bloodgroup+"&&phoneno="+phoneno+"&&address="+address,{
                method:"POST"
            })
            if(savedata){
              alert("successfully save the details");
              window.location="/";
            }
            else 
            {
                console.log("error in saving");
                
            }
   }

    
}
export default postdata;