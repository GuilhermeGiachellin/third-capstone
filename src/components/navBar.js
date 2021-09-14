import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { HiCog, HiMicrophone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import Home from './home';
import Details from './details';
import './styles/navBar.css';

const NavBar = () => (
  <Router>
    <header>
      <nav className="navBarHeader">
        <div className="arrow_cnt">
          <NavLink to="/details">
            <IoIosArrowBack />
          </NavLink>
          <h4 className="year">2021</h4>
        </div>
        <h4 className="app_name">Name of APP</h4>
        <div className="cog_cnt">
          <HiMicrophone />
          <HiCog />
        </div>
      </nav>
    </header>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default NavBar;
