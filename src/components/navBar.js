import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiCog, HiMicrophone } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';

import './styles/navBar.css';

const NavBar = () => (
  <header>
    <nav className="navBarHeader">
      <div className="arrow_cnt">
        <NavLink to="/">
          <IoIosArrowBack />
        </NavLink>
        <h4 className="year">2021</h4>
      </div>
      <h4 className="app_name">AOE2:DE Top 10</h4>
      <div className="cog_cnt">
        <HiMicrophone />
        <HiCog />
      </div>
    </nav>
  </header>
);

export default NavBar;
