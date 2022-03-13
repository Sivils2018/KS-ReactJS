import React, { Component } from "react";
import '../components/App.css'; 

export default class Login extends Component {
    
    render() {
        return (
            <div className="form">
              <h1>Login</h1>
            <form>
              <div className="txt_field">
                <label>Email: </label>
                <input type="text" name="email" /> 
              </div>
              <div className="txt_field">
                <label>Password:</label>
                <input type="password" name="pass" required />
              </div>
              <div className="pass"> Forgot password?</div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
         );
    }
}