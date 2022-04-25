import React, { Component } from "react";
import axios from 'axios'; 
import ReviewWishlist from './ReviewWishlist'; 
import Header from "./Header";

class Wishlist extends Component 
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
        axios.get('http://localhost/wishlist.php?user_id=' + localStorage.getItem('user_id'))
        .then(response =>
            {
                this.setState({products: response.data});
                console.log(response);
            }); 
    }

    wishlist()
    {
        return this.state.products.map(function(object, i)
        {
            return <ReviewWishlist obj={object} key={i} /> 
        }); 
    }

    render()
    {
    return (
        <><Header /><div>
            <h3>Wishlist</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.wishlist()}
                </tbody>
            </table>
        </div></>
    )
}

}
export default Wishlist; 