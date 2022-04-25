import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Button, Badge} from "reactstrap";
import React, { Component } from "react";



class Header extends Component {

      constructor(props)
      {
            super(props); 
            this.onClick = this.onClick.bind(this); 
      }
      
      onClick(e)
      {
          e.preventDefault(); 
          localStorage.clear();
      }
render ()

{
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link to={"/Home"} className="navbar-brand" style={{color: "red", fontSize: "40px", fontFamily: "serif", borderStyle: "solid"}}> IWantThis </Link>
 <div className="collapse navbar-collapse" id="navbarSupportContent">
      <ul className="navbar-nav mr-auto" style={{margin: "20px"}}>
            <li className="nav-item"> <Link to={"/Home"} className="nav-link">Home </Link> </li>
            {localStorage.getItem("name") ? '' : <>
            <li className="nav-item"> <Link to={"/Login"} className="nav-link">Login </Link> </li>
            <li className="nav-item"> <Link to={"/Register"} className="nav-link"> Register </Link> </li>
            </>
            }
      </ul>
</div>
      <div>
            <nav>
            {!localStorage.getItem("name") ? (<><Link className="dropdown-item" to="/Login"> Log In </Link><Link className="dropdown-item" to="/Register"> Sign Up</Link></>):(<><><Link className="dropdown-item" to="/Wishlist"> Welcome, {localStorage.getItem("name")} <Badge color='primary'>0</Badge></Link></><Button  onClick={this.onClick} >Log out</Button></>)} 
            </nav>
      </div>
</nav>
        )
        }

}


export default Header; 