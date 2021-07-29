import React, { Component } from 'react';
import {connect} from 'react-redux'
import { registerUser } from '../../actions/user_actions' ;
class Signup extends Component {
  
    state={
        name:'',
        lastname:'',
        email:'',
        password:'',
        passwordconfirmation:'',
        errors:[]
        
      }

      handleChange = event =>{
        this.setState({[event.target.name]:event.target.value})
      }
      displayErrors=errors=>
      errors.map((error,i)=><p key={i} style={{color:'red'}}>{error}</p>)

      isFormValid=()=>{
          let errors =[];
          let error

          if(this.isFormEmpty(this.state)){
            error={message:'Fill in all field'};
            this.setState({errors:errors.concat(error)});
          }else if(!this.isPasswordValid(this.state)){
            error ={message:'Password is invalid'};
            this.setState({errors:errors.concat(error)})
          }
          else if(typeof this.state.email !== "undefined"){
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');
  
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
            
              alert("Email is not valid");
             }else{
               return true;
             }
        }
          else{
            return true;
          }


      }
      isPasswordValid =({password,passwordconfirmation})=>{
        if(password.length<6 || passwordconfirmation.length < 6){
          return false;
        }else if(password!==passwordconfirmation){
          return false;
        }else{
          return true;
        }
      }



      isFormEmpty=({name,lastname,email,password,passwordconfirmation})=>{
        return(
          !name.length ||
          !lastname.length ||
          !email.length ||
          !password.length ||
          !passwordconfirmation.length
        )

      }
      
      submitForm=event =>{
        event.preventDefault();

        let dataToSubmit = {
          name:this.state.name,
          lastname:this.state.lastname,
          email:this.state.email,
          password:this.state.password,
          passwordconfirmation:this.state.passwordconfirmation
        }
     
        if(this.isFormValid()){
          this.setState({errors:[]})
          this.props.dispatch(registerUser(dataToSubmit))
          .then(response=>{
            console.log(response)
            if(response.payload.success){
              alert('you are Successfully SignUp ')
              this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
                passwordconfirmation:'',
                errors:[]

              })
           
                
            }
            else{
              this.setState({
                errors:this.state.errors.concat('your attempt to send data to DB was failed ')
              })

            }
          })
          .catch(err=>{
            this.setState({
              errors:this.state.errors.concat(err)
            })
          })
        }else{
          alert('Fill all the field corractly form is not valid password greater than 6 words')
        }

      }
    
    render() {
        return (
            <div className="signin">
            <div className="signin__container">
              <h1 style={{ color: "#000" }}>SignUp</h1>
              <form onSubmit={""}>
                <div className="signin__div">
                <div>
                  <label htmlFor="name">FirstName:</label>
                  </div>
                  <input
                    className="inputfield__style"
                    type="text"
                    name='name'
                    value={this.state.name}
                    id='name'
                    placeholder='Enter your name'
                    onChange={e => this.handleChange(e) }
                  />
                </div>
    
                <div className="signin__div">
                <div>
                  <label htmlFor="lastname">LastName:</label>
                  </div>
                  <input
                    className="inputfield__style"
                    type="text"
                    name='lastname'
                    id='lastname'
                    placeholder='Enter your Lastname'
                    value={this.state.lastname}
                    onChange={e => this.handleChange(e)}
                  />
                </div>

                <div className="signin__div">
                <div>
                  <label htmlFor="email">Email:</label>
                  </div>
                  <input
                    className="inputfield__style"
                    type="email"
                    name='email'
                    id='email'
                    placeholder='Enter your Email'
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
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
                    placeholder='Enter your Password'
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="signin__div">
                <div>
                  <label htmlFor="lastname">Confirm Password</label>
                  </div>
                  <input
                    className="inputfield__style"
                    type="password"
                    name='passwordconfirmation'
                    id='passwordconfirmation'
                    placeholder='Confirm your Password'
                    value={this.state.passwordconfirmation}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
           
                <div className="signin__div">
                  <button
                    type="submit"
                    className="btn__two"
                    onClick={this.submitForm}
                  >
                    SignUp
                  </button>

                </div>
                
              </form>
            </div>
          </div>
                
            
        );
    }
}


export default connect()(Signup);