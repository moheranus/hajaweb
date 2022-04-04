import React from 'react';
import './signUp.css';

import {Link} from 'react-router-dom'

export default function SignUp(){
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
                                  <h5>Please sign-in to contnue!</h5>
                            </div>
                      </div>

                </div>
                <div className="InnerContainer">
                    <div className="FormContainer">
                          <input type="email" placeholder="email" />
                          <input type="password" placeholder="password" />
                          <a href="/">Forgot your password?</a>
                        
                          <button type="submit" className="signin-btn">Signin</button>
                       
                          <h5>Don't have an account? <a href="/"className="BoldLink"><Link to='/createAccount'>
                           SignUp
                         </Link> </a>
                          
                           </h5>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}