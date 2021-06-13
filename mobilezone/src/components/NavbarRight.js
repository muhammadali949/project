import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
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
       
    
  }, [login])

  if (login && !login.isAuth) {
  return (
    <>
      <li className="nav-item">
        <Link to="/signin" className="nav-links" onClick={closeMobileMenu}>
          <span>Signin</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
          <span>Signup</span>
        </Link>
      </li>

      
    </>
  );
  }else{
    return(
      <li className="nav-item">
        <Link className="nav-links" onClick={logoutHandler}>
          <span>Logout</span>
        </Link>
      </li>
    )
  }
}
export default NavbarRight;
