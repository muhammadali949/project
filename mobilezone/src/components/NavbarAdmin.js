import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
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
              <Link
                to="/admin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <span>UserRequest</span>
              </Link>
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
