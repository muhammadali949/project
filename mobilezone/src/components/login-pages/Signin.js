import React, { Component } from "react";
import {connect} from 'react-redux'
import { loginUser } from '../../actions/user_actions' ;
import { Link } from 'react-router-dom' 
import './Signin.css'


class Signin extends Component {
  
  state={
    email:'',
    password:'',
    errors:[]
    
  }
  displayErrors=errors=>
  errors.map((error,i)=><p key={i} style={{color:'red'}}>{error}</p>)

  handleChange = event =>{
    this.setState({[event.target.name]:event.target.value})
  }
   
  submitForm = event =>{
    event.preventDefault();

    let dataToSubmit = {
      email:this.state.email,
      password:this.state.password
    }
    if(this.isFormvalid(this.state)){
      this.setState({errors:[]})
      this.props.dispatch(loginUser(dataToSubmit))
      .then(response=>{

        if(response.payload.loginSuccess){
          alert('successfully login')
         this.setState({
          email:'',
          password:'',
          errors:[]
         })
        
        }
        else{
          this.setState({
            errors:this.state.errors.concat('Failled to login,you can check your Email and Password')
          })
        }
      })
    }
    else{
      this.setState({
        errors:this.state.errors.concat('Form is not valid')
      })

    }
  }
  isFormvalid=({email,password})=>email&&password;


  render() {

    return (
      
      
      <div className="signin" style={{height:'80vh'}}>
        <div className="signin__container">
          <h1 style={{ color: "#000" }}>Login</h1>
          <form onSubmit={""}>
            <div className="signin__div">
            <div>
              <label htmlFor="email">Email:</label>
              </div>
              <input
                className="inputfield__style"
                type="email"
                name='email'
                value={this.state.email}
                id='email'
                placeholder='Enter your email'
                onChange={e => this.handleChange(e) }
              />
            </div>

            <div className="signin__div">
            <div>
              <label htmlFor="password">Password:</label>
              </div>
              <input
                className="inputfield__style"
                type="password"
                name='password'
                id='password'
                placeholder='Enter your password'
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />
            </div>

            {
              this.state.errors.length> 0&&
              <div>
                {this.displayErrors(this.state.errors)}
              </div>
            }

            <div className="signin__div">
              <button
                type="submit"
                className="btn__two"
                onClick={this.submitForm}
              >
                Login
              </button>&nbsp;&nbsp;

              <Link to='/signup'>
              <button
                type="submit"
                className="btn__two"
              >
                SignUp
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(Signin);

// import React, { useState } from "react";
// import "./Signin.css";
// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event,data) {
//     // event.preventDefault();

//     console.log(data);
//   }
//   return (
//     <div className="signin">
//       <div className="signin__container">
//         <h1 style={{ color: "#000" }}>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className='signin__div' >
//             <label htmlFor="email">Email:</label>
//             <input
//               className="inputfield__style"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div  className='signin__div' >
//           <label htmlFor="password">Password:</label>
//             <input
//               className="inputfield__style"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className='signin__div' >
//             <button
//               type="submit"
//               className="btn__two"
//               disabled={!validateForm()}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;




  