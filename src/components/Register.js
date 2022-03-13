import React, { Component } from "react";
import '../components/App.css'; 
export default class Register extends Component{



    render() {
        return (
            <div className="register">
            <h3>Register</h3>
            <form>
             <div className="form-group">
            <label>First Name:</label>
            <input
            type="text"
            className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Last Name:</label>
            <input
            type="text"
            className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input
            type="text"
            className="form-control"
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input 
            type="password"
            className="form-control"
            />
            </div>
            <div className="form-group">
            <input
            type="submit"
            value="Register User"
            className="btn btn-primary"
            />
            </div>
            </form>
            </div>
        )
    }
}