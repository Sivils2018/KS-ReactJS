import React from 'react'; 
import './card-style.css'; 
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className = "overflow">
                <img src={props.imgsrc} alt="Image 1" className= "card-img-top"/>                 
            <div className="card-body text-dark">
                <h4 className= "card-title">{props.title}</h4>
              <Link to= "/Products">
                <a className= "btn btn-primary">Products</a> 
                </Link>  
            </div>
        </div>
    </div>
    );
}

export default Card; 