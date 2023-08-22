import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import About from "./component/About";
import Career from './component/Career';
import Conduct from "./component/Conduct";
import "./App.css"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" to="/" href="/">BP<span className="text-primary">Cart</span></a>
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#aboutus">About</a>
            <a className="nav-link" href="#career">Career</a>
            <a className="nav-link" href="#contactus">Contact</a>
          </div>
        </div>
      </nav>
      <BrowserRouter>
          <Home />
          <About />
          <Career />
          <Conduct />
      </BrowserRouter>
    </div>
  );
}

export default App;