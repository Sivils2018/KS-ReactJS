import React, { Component } from "react";
import '../components/App.css'; 
import axios from "axios"; 

export default class Register extends Component{

    constructor(props)
    {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName= this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = 
        {   
            first_name: '',
            last_name: '',
            email: '',
            password: ''

        }
    }

         onChangeFirstName(e) 
        {
            this.setState({first_name: e.target.value}); 
        }

        onChangeLastName(e)
        {
            this.setState({last_name: e.target.value}); 
        }

        onChangeEmail(e)
        {
            this.setState({email: e.target.value}); 
        }
        onChangePassword(e)
        {
            this.setState({password: e.target.value}); 
        }

        onSubmit(e)
        {
            e.preventDefault(); 

            const obj = 
            {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                email: this.state.email
               
            }; 
            
            axios 
            .post("http://localhost/IWantThis/insert.php", obj)
            .then(response => console.log(response.data)); 

            this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
            })
        }


    render() {
        return (
            <div className="register">
            <h3>Register</h3>
            <form onSubmit ={this.onSubmit} >
             <div className="form-group">
            <label>First Name:</label>
            <input
            type="text"
            className="form-control"
            value={this.state.first_name}
            onChange = {this.onChangeFirstName}
            />
            </div>
            <div className="form-group">
            <label>Last Name:</label>
            <input
            type="text"
            className="form-control"
            value={this.state.last_name}
            onChange={this.onChangeLastName}
            />
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input 
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={this.onChangePassword}
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
