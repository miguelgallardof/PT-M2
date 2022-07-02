import React from "react";
/* import Logo from "../logo.png"; */
import SearchBar from "./SearchBar.jsx";
/* import s from "./Nav.module.css"; */

function Nav({ onSearch }) {
  return (
    <nav className="s.nav">
      {/*<img src={Logo} alt="" />
      <h1>Weather App</h1> */}
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;

/* import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
​
function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <img src={Logo} alt=''/>
      Henry - Weather App
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};
​
export default Nav; */
