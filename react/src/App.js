import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Login, Wishlist, Register, Home, Products, Header, SingleProduct} from './components';
import { Navbar, Button, Badge} from "reactstrap";
import React, { Component } from "react";
import authenticated from "constants/authenticated";
import { useParams } from "react-router";

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
      localStorage.clear("name")
}

render () 
{
return (
<Router>
 <div className="container">
 <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Home" element={<Home />} /> 
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path='/Products/:id' element={<Products />} />
      <Route path='/Product/:id' element={<SingleProduct />} />  
   </Routes> 
 </div> 
 </Router> 
);
}}



export default App; 