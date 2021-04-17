import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Home"

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
               <img className="logo" src={"/images/earth.png"} alt="logo"/>
              </div></Link>
            </li>
            <li className="pages">
              <Link to="/checkout">Checkout</Link>
            </li>
            <li className="pages">
              <Link to="/sell">Rent out!</Link>
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
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>

    </>
  );
}


function Sell() {
  return <h2>Sell</h2>;
}

function Checkout() {
  return <h2>Checkout</h2>;
}
