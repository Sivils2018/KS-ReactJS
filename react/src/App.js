import { BrowserRouter as Router, Routes, Route, Link, Navigate, Nav, NavDropdown} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Login, Wishlist, Register, Home, Products, Header} from './components';
import { Navbar, Button, Badge} from "reactstrap";
import React, { Component } from "react";
import authenticated from "constants/authenticated";

class App extends Component {
constructor(props)
{
      super(props);
      this.state = ({
            updated: '',
            redirect: false
      });
      this.update = this.update.bind(this);
}

update() {
      this.setState({updated: true})
}

onClick(e){
      e.preventDefault();
      localStorage.clear("name");
}

render () 
{
return (
<Router>
 <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to={"/Home"} className="navbar-brand" style={{color: "red", fontSize: "40px", fontFamily: "serif", borderStyle: "solid"}}> IWantThis </Link>
 <div className="collapse navbar-collapse" id="navbarSupportContent">
      <ul className="navbar-nav mr-auto" style={{margin: "20px"}}>
            <li className="nav-item"> <Link to={"/Home"} className="nav-link">Home </Link> </li>
            <li className="nav-item"> <Link to={"/Login"} className="nav-link">Login </Link> </li>
            <li className="nav-item"> <Link to={"/Register"} className="nav-link"> Register </Link> </li>
      </ul>
</div>
      <div>
            <nav>
            <div>
            <ul className = "navbar-nav mr-auto" style= {{margin: "20px"}}>
                <li className = "nav-item"> Welcome! { localStorage.getItem("name") ? `${localStorage.getItem("name")}` : " " } </li>
                <li className="nav-item"> <Link to={"/Wishlist"} className="nav-link"> <Badge bg= "primary"> 0 </Badge></Link></li>
            {authenticated.getAuthentication() ? <button onClick={() => {this.setState({redirect: false}); authenticated.changeAuthentication(); localStorage.clear("name");}}> Log Out </button> :
            <button onClick={() => {this.setState({redirect: true}); authenticated.changeAuthentication();}}> Log In </button> }
            </ul> 
            </div>
            </nav>
      </div>
</nav>
 <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Home" element={<Home />} /> 
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path='/Products' element={<Products />} /> 
   </Routes> 
 </div> 
 </Router>
);
}}



export default App; 