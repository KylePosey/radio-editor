/*users.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import '../App.js';

/* We simply can use an array and loop and print each user */
const Projects = () => {
  return (
    <div>
    	<Link to="/">Main</Link>
    	<h1> </h1>
    	<Link to="/Projects">Projects</Link>
    </div>
  );
};

export default Projects;