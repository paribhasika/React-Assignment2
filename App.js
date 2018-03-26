import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username: 'admin'
  }
  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  removeCharContainer = (index) => {
    const inputText = this.state.username.split('');
    inputText.splice(index, '1');
    this.setState({ username: inputText.join('') });
  }
  render() {
   
    const char = this.state.username.split('').map((ch, index) => {
      return <CharComponent
        character={ch}
        key={index}
        clicked={() => this.removeCharContainer(index)}
      />

    })
    return (
      <div className="App">
        <h1>Hi I'm App</h1>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.username} />
        <p>{this.state.username}</p>
        <Validation inputLength={this.state.username.length} />
        {char}
      </div>
    );
  }
}

export default App;
