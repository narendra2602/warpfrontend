import React, { Component } from 'react';
import imagelogo from "../assets/images/warplogo.png";




class HeaderComponent extends Component {


 

    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
    }


  

    render() {
        return (
        <div className="d-flex justify-content-center" style={{height :"50px" }}>
            <header>
            <nav className="navbar navbar-expand-md bg-white fixed-top">
            <img
          src={imagelogo}  alt="" width="40" height="40"  />
                       
                    </nav>
           </header>
        </div>
        );
    }
}

export default HeaderComponent;