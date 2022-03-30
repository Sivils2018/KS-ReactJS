
import '../components/App.css'; 
import axios from "axios";
import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";






export default class Login extends Component {
 
state = 
{
   email: '',
   password: '',
   redirect: false
}

OnSubmit(e)
{
  e.preventDefault();

  axios.get("http://localhost/list.php").then(response => response.data)
  .then((data) => {
    this.setState({ users: data})
    this.setState({ redirect: true });
    console.log(this.state.users)
  })
  .catch(error => { 
    console.log(error)

  });
 }


render() {
  if (this.state.redirect) {
    return (
        <Navigate to={'/Home'} />

        )
    }




        return (
            <div className="form">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <div className="txt_field">
                <label>Email: </label>
                <input type="text" name="email" placeholder="email" onChange={e => this.setState({ email: e.target.value })} />
              </div>
              <div className="txt_field">
                <label>Password:</label>
                <input type="password" name="password" placeholder="password" onChange={e => this.setState({ password: e.target.value })} />
              </div>
              <div className="pass"> Forgot password?</div><div className="button-container">
              <input type="submit" value="Login" />
            </div>
            </form>
          </div>
        );
      }
  }


