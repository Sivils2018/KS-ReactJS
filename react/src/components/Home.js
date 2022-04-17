import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom"; 
import axios from 'axios'; 
import CategoriesList from './CategoriesList'



// creating a react-based js file
export default class Home extends Component {
    constructor (props)
    {
        super(props);

        this.state = {
            categories: []
        }; 
    }
    
    componentDidMount(){
        axios.get("http://localhost/category.php")
        .then(response => {
            console.log(response);
            this.setState({categories: response.data});
        })
        .catch(function(error)
        {
            console.log(error);
        }); 
    }

    CategoriesList()
    {
        return this.state.categories.map(function (object, i)
        {
            return <CategoriesList obj = {object} key = {i} />
        }); 
    }

  render() 
  {
      return (
          <div className="h3">
              <h3>Categories</h3>
              <div className='row'>
                  {this.CategoriesList()}
              </div>
          </div>
      )
  }
}