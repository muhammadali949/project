import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarRight from "./NavbarRight";
import NavbarAdmin from './NavbarAdmin'
import "./Navbar.css";
import { Button } from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          MobileZone
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" onClick={closeMobileMenu}>
              Services{" "}
              <i style={{ color: "#fff" }} className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/videos" className="nav-links" onClick={closeMobileMenu}>
              Videos
            </Link>
          </li>

          <NavbarRight closeMobileMenu={closeMobileMenu} />
          {/* <li className='nav-item'>
            <Link
              to='/signin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span>Signin</span>
            </Link>
          </li>
         <li className='nav-item'>
            <Link
              to='/signup'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span>Signup</span>
            </Link>
          </li> */}

          
            


                
            <NavbarAdmin closeMobileMenu={closeMobileMenu}/>
<li>
            <Link
            onClick={closeMobileMenu}
              to="/selectoption"
              className="nav-links-mobile"
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              Post an Ad
            </Link>
          </li>
        </ul>

        <Button />
      </nav>
      <hr className="line" />
    </>
  );
}

export default Navbar;
