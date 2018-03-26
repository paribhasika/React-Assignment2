import React, { Component } from 'react';
import './App.css';
//import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    username:'admin'
  }
 changeUsernameHandler = () =>{
   this.setState({
     username:'user'
   });
 }
 modifyUserNameHandler = (event) =>{
  this.setState({
    username:event.target.value
  });
}
  render() {
    const btnstyle={
      color: '#2c2b26',
      backgroundColor: '#ffe006',
      borderRadius:'8px',
      padding:'8px'
    }
    return (
      <div className="App">
       <h1>Hi I'm App</h1>
       <button style={btnstyle} onClick={this.changeUsernameHandler} >Change</button>
       <UserOutput userName={this.state.username}/>
       <UserOutput userName='superadmin'/>
       <UserInput changed={this.modifyUserNameHandler} val={this.state.username}/>
      </div>
    );
  }
}

export default App;
