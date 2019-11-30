import React from 'react';
// import logo from './logo.svg';
import home from './component/homeScreen/home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Route exact path="/home" component= {home}/>
     </BrowserRouter>
    </div>  
  );
}

export default App;