import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 


class CategoryList extends Component 
{
    render() {
        return (
            <div className = 'cards'>
                <div className= 'card-body'>
                    <img className = 'img-fluid' src={`${this.props.obj.catId}.jpg`} />
                    <Link to={'/Products/' + this.props.obj.catId} style={{marginRight: 4}}>{this.props.obj.catName}</Link>
                </div>
            </div>
        )
    }
}

export default CategoryList; 