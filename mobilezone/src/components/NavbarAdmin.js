import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {USER_SERVER} from '../config'

function NavbarAdmin({ closeMobileMenu }) {
  const [login,setLogin]=useState(false);


  useEffect(() => {
        axios.get(`${USER_SERVER}/auth`)
        .then(response => {
          setLogin(response.data)
        });
        
  }, [login])

  if (login && login.role) {
  return (
    <li className="nav-item">
              <NavLink
                to="/admin"
                className="nav-links"
              activeStyle={{ color:'#0080FF'}}
                onClick={closeMobileMenu}
              >
                <span>UserRequest</span>
              </NavLink>
            </li>
  );
  }else{
      return(
          <>
          </>
      )
  }

}
export default NavbarAdmin;
