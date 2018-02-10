import React,{Component} from "react";
import createuser from "../Services/firebaseservices/createuserinfirebase";
import postdata from "../Services/mongoapi/postdata";
class Donateblood extends Component {
  constructor(){
    super();
  }

  createusercall(){
    postdata();
  }
  render(){
    var styling={
      marginTop:"30px"
    }
    var styles={
      width:"400px"
    }
    return (
        <div>
          <center style={styling}>
              <hr />
              <h4 className="alert alert-info">Please Enter Your Details</h4>
              <div id="error"></div>
              <hr />
              <div id="errors"></div>

              <div style={styling} className="form-group" >
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input id="username" type="text" style={styles} className="form-control" name="username"  placeholder="Username"  required />
              </div>
              <div style={styling} className="form-group" >
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input id="email" type="text" style={styles} className="form-control" name="email"  placeholder="Email"  required />
              </div>


              <div className="form-group" style={styling}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="address" type="text" style={styles} className="form-control"  name="email" placeholder="Address"  required />
              </div>

              <div className="form-group" style={styling}>
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input id="phoneno" type="text" style={styles} className="form-control"  name="password" placeholder="Phone Number"  required />
              </div>
              <div className="form-group" style={styling}>

                <select style={styles} className="form-control" selected="bloodgroup" required name="type" id="bloodgroup">
                              <option  value="" disabled defaultValue selected>What is Your Blood Group?</option>
                              <option className="form-control" name="mechanic" id="A" value="A">A</option>
                              <option name="electrician" id="B" value="B">B</option>
                              <option name="plumber" id="O" value="O">O</option>
                              <option name="photographer" id="AB" value="AB">AB</option>

                </select>
              </div>
                <input type="hidden" id="donor-latitude" />
                <input type="hidden" id="donor-longitude" />
                <button className="btn btn-info" style={styling} onClick={this.createusercall} >Submit Details</button>
                <div id="pleasewait" style={{marginTop:"30px"}}></div>
            </center>

        </div>
    )
  }
}
export default Donateblood;
