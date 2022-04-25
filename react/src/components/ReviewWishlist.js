import React, {Component} from "react";
import axios from 'axios'; 
import {Button} from 'reactstrap';



class ReviewWishlist extends Component 
{
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this); 
    }

    onSubmit(e)
    {
        e.preventDefault();
        axios.get('http://localhost/delete.php?user_id=' + localStorage.getItem('user_id'))
        .then(response => 
        {
            console.log(response)
        })
        .catch(err => console.log(err)); 
    }

    render()
    {
        return (
            <tr key={this.props.key}>
                <td> {this.props.obj.name} </td>
                <td> ${this.props.obj.price} </td>
                <td>
                    <form onSubmit={this.onSubmit} >
                    <Button className= "btn btn-primary">Delete </Button>
                    </form> 
                </td>
            </tr>
        )
    }
}

export default ReviewWishlist; 