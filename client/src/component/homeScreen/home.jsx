import React from 'react';
import logo from '../../images/logo.PNG';
import './home.css';
class home extends React.Component{

 render(){
     return(
          <div className="home">
          <img className="logo" src={logo} alt="logo" height="20%" width="30%"/>
          </div>
     );
 }

};


export default home;