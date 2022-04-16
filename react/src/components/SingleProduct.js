import React, {Component} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'; 


class SingleProduct extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            product: [] 
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


render()
{
    return(
        <div>
            <h3>Product</h3>
            <div className="row">
            <div>
                <div>
                    <img src={`${this.state.product.image}.jpg`}></img>
                </div>
                <div>Name:  {this.state.product.name}</div>
                <div>Price: ${this.state.product.price} </div>
                <div>Details: <br></br>
                {this.state.product.description} </div>
                <div> {this.state.product.catName} </div>
                <Link to={'/Wishlist'}>
                    <Button color = "primary">Add to Wishlist </Button>
                </Link>
            </div>
            </div>
        </div>
        );
    }
}


export default (props) =>
(
    <SingleProduct
    {...props}
    params={useParams()} /> 
); 