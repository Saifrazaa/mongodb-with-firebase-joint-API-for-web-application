import React, { Component } from "react";
interface User{
  username: string,
  email: string,
  address: string,
  bloodg: string,
  phoneno:string
}

class Getdonors extends Component {
  users:User[] = []
  constructor() {
    super();
    this.state = {
      username: [],
      email: [],
      address: [],
      bloodg: [],
      phoneno: []
    }
  }
  componentWillMount(){
    for(var i=0;i<this.users.length ;i++){
      console.log(this.users[i]);
    }
  }
  componentDidMount() {
    fetch("/api/donors").then(function (response) {
      return response.json();
    }).then(result => {
      // for (var i = 0; i <= result.length; i++) {

      //   this.setState({
      //     username: result[i].username,
      //     email: result[i].email,
      //     address: result[i].address,
      //     bloodg: result[i].bloodgroup,
      //     phoneno: result[i].phoneno

      //   })
      // }
      result.forEach(user => {
        // console.log('asdasd',user['username'])
        
        this.users.push(user)
      
      });
      
    }
    )


  }
  render() {
    return (
      <div>
        <li></li>
      </div>
    )
  }
}
export default Getdonors;