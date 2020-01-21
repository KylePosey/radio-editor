import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      c_password: "rk",
      isDone:false
    };
   // this.inputData = this.inputData.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  /*inputData(event) {
    if(this.state.password == this.state.c_password) {
      this.state({
        [event.target.name]:event.target.value,
        isDone: true
      });
    } else if(this.state.password!=this.state.c_password) {
      this.setState({
        isDone:false
      });
    }
  }

  submitData(event) {
    if(this.state.isDone==false) {
      alert("Incorrect Pass");
    } else if(this.state.isDone==true) {
      alert("Correct Pass");
    }
    event.preventDefault();
  }*/




  inputPassword = event => {
    this.setState({ c_password: "ramonkyle" });
    this.setState({ password: event.target.value });
  };


  submitData(event) {

    var login = document.getElementById("loginForm");

    event.preventDefault();
    const { password, c_password } = this.state;
    const matches = password === c_password;
    matches ? login.style.display = "none" : alert("Incorrect Pass");
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <form className="loginForm" id="loginForm" onSubmit={this.submitData}>
          <div id="loginCon">
            <h3 id="passText">Password:</h3>
            <input type="password" name="password" className="formInputBox" onChange={this.inputPassword}/>
            <button className="formButton" type="submit">Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

export default App;
