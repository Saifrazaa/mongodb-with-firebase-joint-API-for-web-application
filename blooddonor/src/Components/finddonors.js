import React,{Component} from "react";
import getdatafirebase from "../Services/firebaseservices/retrieveuserfromfirebase";
import getdata from "../Services/mongoapi/getdata";
class Finddonors extends Component {
  constructor()
  {
    super();
    
  }
  userdata()
  {
      getdatafirebase();
  }
  render(){
    return (
      <div>
          <center >
          
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
