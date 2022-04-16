//import Card from '@material-ui/core'; 
import React, { Component } from "react";
import '../components/App.css'; 
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"; 
import ProductsList from "./ProductsList"; 
import axios from 'axios'; 
import { useParams } from "react-router-dom"

class Products extends Component 

{
    constructor(props) 
    {
        super(props);
        this.state = { 
            products: [] 
        }
    }

    
componentDidMount()
    {
        let thisID = this.props.params.id;
        axios.get('http://localhost/view.php?id=' + thisID)
        .then(response => 
            {
                this.setState({products: response.data});
            });
    }
    productsList()
    {
        return this.state.products.map(function (object, i)
        {
            return <ProductsList obj={object} key={i} />; 
        }); 
    }
    render() 
    {
        return (
             <div>
                 <h3>Products</h3>
                <div className = 'row'>
                    {this.productsList()}
                </div>
             </div>
        ); 
    }
}

export default (props) => 
(
    <Products 
    {...props}
    params={useParams()} />
); 

