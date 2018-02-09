import React,{Component} from "react";
class Getdata extends Component{
  constructor(){
    super();
    this.state={
      username   :"",
      email      :"",
      bloodgroup :"",
      address    :"",
      phoneno    :""
    }
  }
  componentDidMount(){
    fetch("/api/donors").then(function(response){
        console.log(response.json());
        
    }).catch(function(error){
        console.log(error);
    })
  }
  render(){
    return (
            <div></div>
    )
  }
}
export default Getdata;
