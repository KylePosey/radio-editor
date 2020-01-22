/*index.jsx*/
import React from "react";
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import './index.css';


class Nav extends React.Component {

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

  	<div className="Main">

  		<div className="mainNavDiv">
      		<h3>Welcome to the React Router Tutorial</h3>
      		<Link to="/">Main</Link>
      		<h1> </h1>
      		<Link to="/projects">Project</Link>
    	</div>

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
};
}

export default Nav;