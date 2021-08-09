import React, { useState, useEffect } from "react";
import axios from "axios";
import { USER_SERVER } from "./config";
import "./App.css";
import ScrollToTop from "./components/pages/ScrollToTop";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PostAd from "./components/PostAd";
import Postpage from "./view/Postpage";
import Footer from "./components/Footer";
import SelectOption from "./components/pages/SelectOption";
import Sell from "./components/pages/Sell";
import Sellitforme from "./components/pages/Sellitforme";
import Adcard from "./components/Adcard";
import Signin from "./components/login-pages/Signin";
import Auth from "./hoc/auth";
import Signup from "./components/login-pages/Signup";
import Admin from "./admin/Admin";
import FindMobile from "./findmobile/FindMobile";
import ProductDerailPage from "./ProductDetail/ProductDerailPage";
import Homevideo from './video/Homevideo';
import Error from './Error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
     axios.get(`${USER_SERVER}/auth`)
    .then((response) => {
      setLogin(response.data);
    });
    
      
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Switch>
          <Route exact path="/" component={(Auth, null)}>
            <Navbar />
            <Banner />
            <PostAd />
            <Postpage />
            <Adcard />
          </Route>

          <Route exact path="/signin" component={Auth(Signin, false)}>
            <Navbar />
            <Signin exact path="/signin"  />
          </Route>
          <Route exact path="/signup" component={Auth(Signup, false)}>
            <Navbar />
            <Signup />
            {/* <Footer/> */}
          </Route>

          <Route
            exact
            path="/selectoption"
            component={Auth(SelectOption, true)}
          >
            <Navbar />
            <SelectOption />
          </Route>

          <Route exact path="/findmobile">
            <Navbar />
            <FindMobile />
          </Route>

          <Route exact path="/videos">
            <Navbar />
            <Homevideo/>
          </Route>
          {/* <Route
            exact
            path="/product/:productId"
          
          >
            <Navbar />
            <ProductDerailPage/>
          </Route> */}

          <Route exact path="/sell" component={Auth(Sell, true)} />
          <Route
            exact
            path="/sellitforme"
            component={Auth(Sellitforme, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(ProductDerailPage, false)}
          />
          {login && login.isAdmin && (
            <Route exact path="/admin" component={Auth(Admin, true)} />
          )}

          <Route  component={Error} />          
 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
