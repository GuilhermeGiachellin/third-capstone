import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from './styles/navBar.module.css';

const NavBar = () => (
  <Router>
    <header className={styles.navBarHeader}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/details">Missions</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
      </Route>
      <Route path="/details">
        {/* <Details /> */}
      </Route>
    </Switch>
  </Router>
);

export default NavBar;
