import React from 'react'
import './CreateAccount.css'
import {Link} from 'react-router-dom'

export default function CreateAccount() {
  return (
    <>
    
    <div className="login-container">
            <div className="BoxContainer">
                <div className="TopContainer">
                         <div className="BackDrop"></div>
                      <div className="HeaderContainer">
                            <div className="HeaderText">
                                <h2>WELCOME TO</h2>
                                <h2>HAJA TIMES</h2>
                                
                            </div>
                            <div className="SmallText">
                                  <h5>Please signUp to contnue!</h5>
                            </div>
                      </div>

                </div>
                <div className="InnerContainer">
                    <div className="FormContainer">
                          <input type="text" placeholder="username" />
                          <input type="tele" placeholder="phone number" />
                          <input type="email" placeholder="email" />
                          <input type="password" placeholder="password" />
                          <input type="password" placeholder="confirm password" />
                          <a href="/">Forgot your password?</a>
                        
                          <button type="submit" className="signin-btn">SignUp</button>
                       
                          <h5>Already have an account? <a href="/"className="BoldLink"><Link to='/signUp'>
                           Login
                         </Link> </a>
                          
                           </h5>
                    </div>
                </div>
            </div>
            
        </div>
    
    
    </>
  )
}
