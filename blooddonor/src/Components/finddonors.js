import React,{Component} from "react";
import savedata from "../Services/retrieveuserfromfirebase";
import firebase from "../Config/firebase";
class Finddonors extends Component {
  constructor()
  {
    super();
    this.state={
      response:''
    }
  }
  componentDidMount(){
    this.callapi().then(res=>this.setState({response:res.express})).catch(err=>console.log(err))
  }
  callapi=async()=>{
    const response=fetch("/api");
    const body=response.json();
    if(response.status!==200) throw Error(body.message);
    return body;
  };
  userdata()
  {
      savedata();
  }
  render(){
    return (
      <div>
          <center >
          <h1>{this.state.response}</h1>
            <h4 style={{marginTop:"30px"}} className="alert alert-info">What is Your Blood Group</h4>
            <hr />
            <select id="bloodgroup" className="form-control" style={{width:"400px",marginTop:"30px"}}>
              <option  disabled defaultValue selected className="form-control">Select Your Blood Group</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="O">O</option>
              <option value="AB">AB</option>
            </select>
            <button onClick={this.userdata} className="btn btn-info" style={{marginTop:"20px"}}>Find</button>
            <div id="pleasewait" style={{marginTop:"40px",marginBottom:"40px"}}></div>
            <div id="notavailable" style={{marginTop:"40px"}}></div>
          <table className="table table-bordered table-hover table-striped" id="donors-detail" style={{marginTop:"30px"}}>

            </table>
          </center>
      </div>
    )
  }
}
export default Finddonors;
