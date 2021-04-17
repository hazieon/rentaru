import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Home"
import Sell from "./components/Sell"
import Checkout from "./components/Checkout"
import logo from "./images/earth.png"
import List from "./components/List"
import Thankyou from "./components/Thankyou"

export default function App() {
  return (
    <>
    <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li className="home-link">
             <Link to="/"> 
              <div className="logo-box">
               <img className="logo" src={logo} alt="logo"/>
              </div></Link>
            </li>
            <li className="pages" id="cart">
              <Link to="/checkout">🛒</Link>
            </li>
            <li className="pages" id="rentee">
              <Link to="/sell">Rentables</Link>
            </li>
            <li className="pages" id="rentee">
              <Link to="/list">Rent Out</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
<footer className="footer"> </footer>
    </>
  );
}

