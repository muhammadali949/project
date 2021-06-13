// import React from 'react'
import React, { useState } from "react";
import Select from "react-select";
import { City } from "./City";
import {USER_SERVER} from '../../config'
import axios from 'axios';
// import {City} from './City'
import FileUpload from './FileUpload'
import { Mobile } from "./MobileName";
import {useHistory} from 'react-router-dom';
import "./Sellinput.css";


// React Selector style
const style = {
  control: styles => ({ ...styles, 
    backgroundColor: '#fff',
    height:'50px',
    fontSize: 14,
    color: 'blue'
  }),

}
//Upload Images

// New and Used Radio buttons
function Sellinput(props) {
  const [make,setMakes] = useState(''); 
  const [title,setTitle] = useState('');
  const [description,setDescription]=useState('');
  const [city,setCity] = useState('');
  const [price ,setPrice] =useState('');
  const [name,setName] = useState('');
  const [number,setNumber] = useState('');
  const [anothern,setAnothern]=useState('');
  const [images,setImages]=useState([]);
  const [id,setId] = useState('');
  const history = useHistory();
  

const [condition, setcondition] = useState({
  "mcondition": "",
});
 

// console.log(renderPhotos)
  const handlechange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setcondition({
      ...condition,
      [name]: value,
    });
  };
  // console.log(condition.mcondition);
  // text field class

  const updateImages = (newImages)=>{
    console.log(newImages)
    setImages(newImages)
  }
  const onSubmit =(event)=>{
      event.preventDefault()

      if(!make || !condition || !title || !description || 
        !city || !price || !images || !name || !number 
        || !anothern){
          return alert('Fill All The Fields First')
        }
        else{
        

       axios.get(`${USER_SERVER}/auth`)
      .then(response => {
        setId(response.data._id)
      });

      const variables={
        writer:id,
        make:title,
        condition:condition,
        title:make,
        description:city,
        city:description,
        price:price,
        images:images,
        name:name,
        number:number,
        optionaln: anothern
      }
      console.log(variables)

      axios.post('/api/product/uploadProduct',variables)
      .then(response=>{
        if(response.data.success){
          alert('Successfully Uploaded Post')
          history.push('/findmobile')
        }else{
          alert('Faild Upload Post')  
        }
      })
    }

  }
  return (


    <div className="sellinput">
      <div className="sellinput__container">
        <div className="sellinput__container2">
          <h2>Mobile Information</h2>
          <h4>(All fields marked with * are mandatory)</h4>
          <div className="mobile__info">
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
                  onChange={(e)=> setMakes(e.value)}
                  
                  
                />
              </div>
            </div>

            <div className="condition">
              <h4>condition*</h4>
              <div className="condition__container">
                <div className="option__one">
                  <p>New</p>
                  <input
                    className="input__btn"
                    type="radio"
                    name="mcondition"
                    value="New"
                    onChange={handlechange}
                  />
                </div>
                <div className="option__two">
                  <p>Used</p>
                  <input
                    className="input__btn"
                    type="radio"
                    name="mcondition"
                    value="Used"
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>


            <div className="title">
            <h4>Ad Title*</h4>
            <input type="text" 
            className='inputfield__style'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}

            />

            </div>

            <div className="description">
            <h4>description*</h4>
            <textarea
             className='inputfieldd__style'
             onChange={(e)=> setDescription(e.target.value)}
             value={description}
             rows="4" 
             cols="50" />
            {/* <input 
            row='4'
            cols="50"
            type="text" 
            className='inputfieldd__style'
            
            onChange={e=> setDescription(e.target.value)}
  
            /> */}

            </div>
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
                  onChange={(e)=> setCity(e.value)}

                />
              </div>
            </div>

            <div className="price">
             <h4>*price</h4>
             <input 
             type="number"
            placeholder='Rs' min="1" 
            className='inputfield__style'
             onChange={(e)=> setPrice(e.target.value)}
             value={price}

             />
            </div>


          </div>
        </div>
        <div className="upload__photo">
        <h2>Upload Photo</h2>
        <FileUpload refreshFunction={updateImages}/>
        </div>

        <div className="personal__info">
        <h2>Contact Information</h2>
        <h4>Seller Name*</h4>
        <input
        className='inputfield__style'
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}

        />
        <h4>Phone Number*</h4>
        <input  
        className='inputfield__style'
        type="number"
        min="0"
        onChange={(e)=> setNumber(e.target.value)}
        value={number}

        />
        <h4>Another Phone Number(optional)*</h4>
        <input  
        className='inputfield__style'  type="number"
        min="0"
        onChange={(e)=> setAnothern(e.target.value)}
        value={anothern}

        />

        </div>
        <div className='btn__div'>
      <button onClick={onSubmit} className='btn__two'>Post Now</button>

      </div>

      </div>
    </div>
  
 
  
  );
}

export default Sellinput;
