import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom"; 
import Card from 'Cards/Cards'; 



// creating a react-based js file
export default function Home (){
    
    return (
        <><div>
            <h3 style={{padding: "50px", display: "flex", justifyContent: "center"}}>Categories</h3>
        </div><div>
            <Card>
                <ul>
                     <li><Link to="/Products"> Sports </Link></li> 
                        <li> <Link to="/Products"> Beauty </Link></li> 
                     <li> <Link to= "/Products"> Clothes </Link></li>
                </ul>
            </Card>
            </div></> 
        ); 
    }
