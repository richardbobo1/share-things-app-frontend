import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Switch, NavLink 
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NavBar from './components/NavBar';
import InventoryPage from './components/InventoryPage';
import Footer from './components/Footer';
import Login from './components/Login';




class App extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     myInventory: [],
  //     othersItems: []
  //   }
  // }

  // componentDidMount(){

  // }

  render() {

    return (
    
        <Router>
            <div className="app">
   
            <NavBar />
            
              <Routes> 
                <Route exact path="/" element={<Home />} />
                <Route exact path="/inventory" element={<InventoryPage />} />
                <Route exact path="/login" element={<Login />} />
                <Route render={() => <div>404 Not Found</div>}/>         
              </Routes>

            <Footer />
            </div>
        </Router>
    );

  }

}

export default App;
