import React from "react";
import { Link } from "react-router-dom";
import Sellinput from './Sellinput'
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhotoIcon from "@material-ui/icons/Photo";
import PaymentIcon from "@material-ui/icons/Payment";
import "./SellHeader.css";
function SellHeader() {
  return (
    <>
    <div className="sell">
      <div className="sell__container">
        <div className="header__div">
          <header className="header">
            <Link className="footer__logo" to="/">
              <h1 style={{ color: "#000000" }}>MobileZone</h1>
            </Link>
          </header>
          <hr className='style-tw' />
        </div>
        <div className="sell__main">
          <div className="sell__info">
            <h2>Sell your Mobile With 3 Easy & Simple Steps!</h2>
            <p style={{fontSize:'bold',color:'#00000'}}>It's free and takes less than a minute</p>
          </div>
          <div className="ad__steps">
            <div className="ad__step">
              <div>
                <PhoneAndroidIcon style={{fontSize:'33px'}}  className="ui__icons" />
              </div>
              <div>
                <p> Enter Your Mobile Information </p>
              </div>
            </div>
            <div className="ad__step">
              <div>
                <PhotoIcon  style={{fontSize:'33px'}} className="ui__icons" />
              </div>
              <div>
                <p> Upload Photos </p>
              </div>
            </div>

            <div className="ad__step">
              <div>
                <PaymentIcon style={{fontSize:'33px'}}  className="ui__icons" />
              </div>
              <div>
                <p> Enter Your Selling Price </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default SellHeader;
