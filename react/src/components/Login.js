import '../components/App.css'; 
import axios from "axios";
import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import Header from './Header';


export default class Login extends Component {

constructor(props)
{
  super(props);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangePassword = this.onChangePassword.bind(this);
  this.OnSubmit = this.OnSubmit.bind(this); 

  this.state = 
  {
    email : '',
    password: '',
    redirect: false 
  }; 
}

onChangeEmail(e)
{
  this.setState({email: e.target.value});
}

onChangePassword(e)
{
  this.setState({password: e.target.value});
}

OnSubmit(e)
{
  e.preventDefault();

  const obj = {
    email: this.state.email, 
    password: this.state.password
  }
  axios
  .post("http://localhost/list.php", obj)
  .then(response => 
  {
    console.log(response.data);
    if(response.data.Message == "Invalid Email/Password")
        alert("Invalid Login");
    else
    {
    localStorage.setItem("name" , response.data.displayName);
    localStorage.setItem("user_id", response.data.user_id); 
    this.setState({
      email: '',
      password: '',
      redirect: true 
    }); 
  }
})
.catch(err => 
  {
    console.log(err)
  }); 
}
  
render()
{
  if(this.state.redirect)
  {
    return <Navigate to={'/Home'} /> 
  } 
        return (
          <><Header /><div className="form">
            <h1>Login</h1>
            <form onSubmit={this.OnSubmit}>
              <div className="form-group">
                <label>Email: </label>
                <input type="text" name="email" placeholder="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
              </div>
              <div className="pass"> Forgot password?</div><div className="button-container">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div></>
        );
      }
  }


