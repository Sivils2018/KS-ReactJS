//import Card from '@material-ui/core'; 
import React, { Component } from "react";
import '../components/App.css'; 
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 

export default class Products extends Component{
    render() {

        return (
        <div className="product">
            <h2>Products </h2>
            <ul>
                     <li><Link to="/Products/"> Product 1 </Link></li> 
                        <li> <Link to="/Products/"> Product 2 </Link></li> 
                     <li> <Link to= "/Products/"> Product 3</Link></li>
            </ul>

        </div> 

    )

    }
}
