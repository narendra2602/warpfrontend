import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './firebase';
// import LoginFormComponent from './components/LoginFormComponent';
import LicenseComponent from './components/LicenseComponent';
import HeaderComponent from './components/HeaderComponent';
class App extends Component {


  componentDidUpdate() {

    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("token", data)
    })
  }



  render() {

    return (
      <div >
        <HeaderComponent />
        <LicenseComponent />
      </div>
    );
  }
}

export default App;