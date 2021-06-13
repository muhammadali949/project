import React,{useState} from "react";
import { Link } from 'react-router-dom'
import "./SelectOption.css";

function SelectOption() {
    const [formData,setformData] =useState({
        pagelink:''
    })
    const handlechange = (event) =>{
        const target = event.target
        const name = target.name
        const value = target.value
        setformData({
            ...formData,
            [name]:value
       })
    }
    // const HandleClick= e =>{
    //    e.preventDefault()
    //    const a = formData.pagelink;


    // }
    console.log(formData.pagelink)
  return (
      <form action='submit'>
    <div className="selectoption">
      <div className="container__selectoption">
        <h2>How Do You Want To Sell Your Mobile?</h2>
        <div className="sell__mobilezone">
          <div className="input__div">
            <input className='input__style' type="radio" name='pagelink' value='sell' 
            onChange={handlechange}
             />  
       
          </div>
    
          <div className="sell__detail">
            <h3>Post your Ad for Free in 3 Easy Steps</h3>
            <ul className="ul__style">
              <div className="a">
                <i class="fa fa-check" aria-hidden="true"></i>
                <li>Post your Ad for Free in 3 Easy Steps</li>
              </div>
              <div className="a">
                <i class="fa fa-check" aria-hidden="true"></i>
                <li>Get Genuine offers from Verified Buyers</li>
              </div>
              <div className="a">
                <i class="fa fa-check" aria-hidden="true"></i>
                <li>Sell your Mobile Fast at the Best Price</li>
              </div>
            </ul>
          </div>
          <div className='img'>
              <img className='img_style' src="http://www.pngall.com/wp-content/uploads/1/Mobile-PNG-Transparent-HD-Photo.png" alt="Mobile__img"/>
          </div>
        </div>
        <div className="line__style">
        <div className='h'><hr style={{width:'200px' ,color:'#4B0082'}}/></div>

        <div className='or__style'><h1 style={{color:"#4B0082"}}>OR</h1></div>
        <div className='h'><hr style={{width:'200px' ,color:'#4B0082'}}/></div>


</div>
        <div className="sell__tryit">
     
            <div className="input__divtwo">
                <input className='input__style' type="radio" name='pagelink' value='sellitforme'
                onChange={handlechange}   
                />
            </div>
            <div className="sell__detailtwo">
            <h3>Try MobileZone Sell it For Me</h3>
            <ul className="ul__style">
            <div className="a">
              <i class="fa fa-check" aria-hidden="true"></i>
              <li>Dedicated Sales Expert to Sell your Mobile</li>
            </div>
            <div className="a">
              <i class="fa fa-check" aria-hidden="true"></i>
              <li>We Bargain for you and share the Best Offer</li>
            </div>
            <div className="a">
              <i class="fa fa-check" aria-hidden="true"></i>
              <li>We ensure Safe & Secure Transaction</li>
            </div>
          </ul>
            </div>
            <div className='img'>
            <img className='img_style' src="http://flors.files.wordpress.com/2011/06/picture1.png" alt="Mobile__img"/>

            </div>
        </div>
        <div className="style__btn">
        <Link to={formData.pagelink}>
        <button  disabled={!formData.pagelink
        } className='btn__two'>Continue</button>
        </Link>
        
        </div>
      </div>
    </div>
    </form>
  );
}

export default SelectOption;
