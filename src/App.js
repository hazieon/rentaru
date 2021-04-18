import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Home"
import Sell from "./components/Sell"
import Checkout from "./components/Checkout"
import About from "./components/About"
import logo from "./images/earth.png"
import List from "./components/List"
import Thankyou from "./components/Thankyou"
import image13 from "./images/photos (13).jpg"

export default function App() {
  const [rentable, setRentable] = useState({item:"Waffle Pan", img: image13 })

function changeRentable(item, image){
setRentable({item:item, img: image});
}

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
              <Link to="/sell">Rentables™</Link>
            </li>
            <li className="pages" id="rentee">
              <Link to="/list">Rent Out</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/sell">
            <Sell changeRentable={changeRentable} />
          </Route>
          <Route path="/checkout">
            <Checkout rentable={rentable}/>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/thankyou">
            <Thankyou />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Homepage changeRentable={changeRentable} />
          </Route>
        </Switch>
      </div>
    </Router>
<footer className="footer"> </footer>
    </>
  );
}

