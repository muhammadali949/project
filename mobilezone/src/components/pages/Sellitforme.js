import React, { useState } from "react";
import Select from "react-select";
import { City } from "./City";
import { Mobile } from "./MobileName";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Sellitforme.css";
import { Link } from "react-router-dom";
function Sellitforme() {
  const [make, setMakes] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const style = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      height: "50px",
      fontSize: 14,
      color: "blue",
    }),
  };
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(!make ||  
      !city ||  !name || !number){
        return alert('Fill All The Fields First')
      }
      else{
      
      const variables = {
        make: make,
        city: city,
        name: name,
        number: number,
        email:email
      };
      console.log(variables);

      axios.post('/api/admin/admin',variables)
      .then(response=>{
        if(response.data.success){
          alert('Successfully Uploaded Post')
          history.push('/')
        }else{
          alert('Faild Upload Post')  
        }
      })
    }  
  };

  return (
    <div className="sell">
      <div className="sell__container">
        <div className="header__div">
          <header className="header">
            <Link className="footer__logo" to="/">
              <h1 style={{ color: "#000000" }}>MobileZone</h1>
            </Link>
          </header>
          <hr className="style-tw" />
        </div>
        <div className="sellitforme__main">
          <h2>Get your Mobile registered in MobileZone Sell It For Me</h2>
          <div className="sellitforme">
            <p>
              Let MobileZone experts take the difficulty out of selling your
              Mobile! We will manage your ad and find
              <br />
              the best possible deal for you. Chose what's best for you today.
            </p>
            <div className="mobile__select">
              <div>
                <label htmlFor="select">
                  <h4>City*</h4>
                </label>
              </div>
              <div>
                <Select
                  className="select"
                  placeholder="select city..."
                  options={City}
                  styles={style}
                  onChange={(e) => setCity(e.value)}
                />
              </div>
            </div>
            <div className="personal__information">
              <h4>Seller Name*</h4>
              <input
                className="inputfield__style"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <div className="phone">
                <h4>Phone Number*</h4>
                <input
                  min={0}
                  className="inputfield__style"
                  type="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </div>
              <div className="phone">
                <h4>Email*</h4>
                <input
                  className="inputfield__style"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="mobile__select">
              <div>
                <label htmlFor="select">
                  <h4>Make*</h4>
                </label>
              </div>
              <div>
                <Select
                  className="select"
                  placeholder="Makes..."
                  options={Mobile}
                  styles={style}
                  onChange={(e) => setMakes(e.value)}
                />
              </div>
              <button onClick={onSubmit} className="btn__two button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellitforme;
