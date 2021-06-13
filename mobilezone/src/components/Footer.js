import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="left">
          <div className="logo">
            <Link className="footer__logo" to="/">
              <h1>MobileZone</h1>
            </Link>
          </div>
          <div className="about">
            <p>Get Genuine offers from Verified Buyers</p>
            <p>Sell your Mobile Fast at the Best Price</p>
            <p> We Bargain for you and share the Best Offer</p>
          </div>
        </div>
        <div className="middle">
          <h2>Contact</h2>
          <div className="contact__info">
            <LocationOnIcon /> <p>Suite # 210, Opp: City Sahiwal,</p>
          </div>
          <div className="contact__info">
            <PhoneIcon /> <p>+923217392676</p>
          </div>
          <div className="contact__info">
            <EmailIcon /> <p>mobilezone@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h2>MobileZone.com</h2>
          <div className="link__style">
            <Link to="/findmobile" className="footer__links">
              Find Mobiles
            </Link>
          </div>
          <div className="link__style">
            <Link className="footer__links" to="/selectoption">
              Post an Ad
            </Link>
          </div>
          <div className="link__style">
            <Link className="footer__links" to="/videos">
              Videos
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__right">
          {/* <p></p> */}
          <p style={{ "margin-left": "60px" }}>
          Copyright © 2021 MobileZone (Pvt) Ltd. - All Rights Reserved.<br/>
                   Terms of Service | Privacy Policy
          </p>
        </div>
        <div className="bottom__left">
          <div className="botton__icons">
            <a href="https://web.facebook.com/alisaleem76/" target="_blank" >
              <FacebookIcon />
            </a>
          </div>
          <div className="botton__icons">
            <a href="https://www.instagram.com/malisahib111/" target="_blank" >
              <InstagramIcon />
            </a>
          </div>
          <div className="botton__icons">
            <a href="https://twitter.com/Ali39793633" target="_blank" >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
