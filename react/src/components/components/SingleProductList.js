import React, {Component} from "react";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'; 


class SingleProductList extends Component
{
    render()
    {
        return (
            <div className= 'card col-4'>
                <div className= 'card-body center'>
                    {this.props.obj.product_name} <br />
                    {this.props.obj.product_price}
                </div>
                <Link to={'/Wishlist'}>
                    <Button color = "primary">Add to Wishlist </Button>
                </Link>
            </div>
        ); 
    }
}

export default SingleProductList; 