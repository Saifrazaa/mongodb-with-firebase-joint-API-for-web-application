import React ,{Component} from "react";
class Getdonors extends Component{
  constructor(){
    super();
    this.state={
      username:[],
      email   :[],
      address :[],
      bloodg  :[],
      phoneno :[]
    }
  }
  componentDidMount(){
      fetch("/api/donors").then(function(response){
        return response.json();
      }).then(result=>{
        for(var i=0;i<result.length ;i++){
          this.setState({
            username:result[i].username,
            email   :result[i].email,
            address :result[i].address,
            bloodg  :result[i].bloodgroup,
            phoneno :result[i].phoneno
    
            })
          }
        }
      )
      console.log(this.state);
      
  }
  render(){
    return (
        <div>
          <li>{this.state.username}</li>
        </div>
    )
  }
}
export default Getdonors;