import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {USER_SERVER} from '../config'
import { logoutUser } from "../actions/user_actions";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavbarRight({ closeMobileMenu }) {
  const [login,setLogin]=useState(false);
  const [logout,setlogout]=useState(false);
  
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logoutUser()).then(async (response) => {
      if (response.payload.success) {
        alert("logout successfully");
        history.push('/signin')
      } else {
        alert("error");
      }
    });
   
  };
  useEffect(() => {
        axios.get(`${USER_SERVER}/auth`)
        .then(response => {
          setLogin(response.data)
        });
       console.log("login")
    
  }, [login])

  if (login && !login.isAuth) {
  return (
    <>
      <li className="nav-item">
        <NavLink to="/signin"  exact activeStyle={{ color:'#0080FF'}}   className="nav-links" onClick={closeMobileMenu}>
          <span>Signin</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signup"  exact  activeStyle={{ color:'#0080FF'}}  className="nav-links" onClick={closeMobileMenu}>
          <span>Signup</span>
        </NavLink>
      </li>

      
    </>
  );
  }else{
    return(
      <li className="nav-item">
        <NavLink className="nav-links"  to='' onClick={logoutHandler}>
          <span>Logout</span>
        </NavLink>
      </li>
    )
  }
}
export default NavbarRight;
