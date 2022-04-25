import React, {Component} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Badge, Button} from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"; 
import Header from "./Header";
import { count } from "console";

class SingleProduct extends Component 
{
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this); 
        this.state = {
            product: [], 
            redirect: false
        }; 
    }

componentDidMount()
{
    let thisId = this.props.params.id
    axios.get('http://localhost/products.php?id='+ thisId)
    .then(response =>
        {
            this.setState({product: response.data});
            console.log(response);
        }); 
}

onSubmit(e)
{
    e.preventDefault(); 

    const data = {
        product: this.state.product
    }
    axios.post('http://localhost/getproduct.php?user_id=' + localStorage.getItem('user_id'), data)
    .then(response => 
        {
            console.log(response);
            this.setState({product: response.data});
            this.setState({redirect: true}); 
        });

}
render()
{
    if(this.state.redirect)
  {
    return <Navigate to={'/Wishlist'} /> 
  } 
    return(
        <><Header /><div>
            <h3>Product</h3>
            <div className="row">
                <div>
                    <div>
                        <img src={`${this.state.product.image}.jpg`}></img>
                    </div>
                    <div>Name: {this.state.product.name}</div>
                    <div>Price: ${this.state.product.price} </div>
                    <div>Details: <br></br>
                        {this.state.product.description} </div>
                    <div> {this.state.product.catName} </div>
                    <div>
                    
                    {!localStorage.getItem("name") ? '' : <> <form onSubmit={this.onSubmit}>
                    <Button color="primary"> Favorite </Button> </form> </> }       
                    </div>
                </div>
            </div>
        </div></> 
        );
    }
}



export default (props) =>
(
    <SingleProduct
    {...props}
    params={useParams()} /> 
); 