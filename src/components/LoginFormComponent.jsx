import React, { Component } from "react";
 import alogo from "../assets/images/warplogo.png";
 import LoginService from '../services/LoginService';
import '../css/e-site.css';

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            username: "",
            password: "",
            error:""
        };
    }
    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };
    handlepasswordChange = event => {
        this.setState({password: event.target.value});
    };
    handleSubmit = event => {
        event.preventDefault();
        //console.log(`${this.state.username} ${this.state.password}`);
        let user = {username: this.state.username, password: this.state.password };
        console.log(user);
        
    };
    render() {
        const { username, password } = this.state;
        return (
              
            <div >

	<table style={{width:'95%', marginLeft:'auto', marginRight:'auto'}} >
<tr><td className="signin-text" >Sign in</td></tr>


                        <tr><td><input
                            type="text"
                            value={username}
                            onChange={this.handleUsernameChange}
                            placeholder='Username/email'
                            data-theme="b"
                            className="usertext"
                            required
                        /></td></tr>
                        <tr><td>                 
                        <input
                            type="password"
                            value={password}
                            onChange={this.handlepasswordChange}
                            placeholder='Password'
                            required
                        /></td></tr> 


<tr><td>
<button className='loginButton' type="submit">Login</button></td></tr>
<tr><td ><a href="forgot.html" id="forgotpassword" >Forgot Password?</a></td></tr>
</table>
</div>
        );
    }
}

export default LoginFormComponent;