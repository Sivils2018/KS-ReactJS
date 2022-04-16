import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Products from "./Products";


class ProductsList extends Component
{
    render()
    {
        return(     
            <div className ='card col-4'>
                <div className = 'card-body'> 
                <img src={`${this.props.obj.image}.jpg`} className = "img-fluid"></img>
                <div>
                    {this.props.obj.name}</div>
                <div>Price: ${this.props.obj.price} </div>
                <div>
                <Link to = {'/Product/' + this.props.obj.product_id}><Button color = "primary">View Product </Button></Link> 
                </div>
                </div>

            </div>
        )
    }
}
export default ProductsList; 