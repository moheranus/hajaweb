import React from 'react';

import './Footer.css';
import {Link} from 'react-router-dom'

// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function Footer(){
   
    return (
       <>
          <div class="footer">
                 <div className="container">
                        <div className="sec aboutus">
                              <h2>About us</h2>
                              <p>
                                  lorem ipsum dolor sit lorem ipsum lorem ipsum
                                  lorem ipsum dolor sit lorem ipsum lorem ipsum
                                  lorem ipsum dolor sit lorem ipsum lorem ipsum
                                  lorem ipsum dolor sit lorem ipsum lorem ipsum
                                  lorem ipsum dolor sit lorem ipsum lorem ipsum.
                              </p>
                              <ul className="sci">
                                    <li><a href="/"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                              </ul>
                        </div>
                        <div className="sec quicklinks">
                              <h2>Quick Links</h2>
                              <ul>
                                  <li><a href="/">AboutUs</a></li>
                                  <li><a href="/">News</a></li>
                                  <li><a href="/">Events</a></li>
                                  <li><a href="/">Membership</a></li>
                                  <li><a href="/">Vision</a></li>
                                  <li><a href="/">Project</a></li>
                              </ul>
                        </div>
                        <div className="sec quicklinks">
                              <h2>Additional info</h2>
                              <ul>
                                  <li><a href="/"><Link to='./message-us'>
                           MessageUs
                         </Link></a></li>
                                  <li><a href="/">Developer info</a></li>
                                  <li><a href="/">Our Mission</a></li>
                                  
                              </ul>
                        </div>
                        <div className="sec contact">
                              <h2>ContactUs</h2>
                              <ul className="info">
                                  <li>
                                      <span><i class="fas fa-map-marker"></i></span>
                                      <span>Akaki Kality, FSTU</span>
                                  </li>
                                  <li>
                                      <span><i class="fas fa-phone"></i></span>
                                      <p><a href="tel:+251949052848">+251 949 052 848</a><br/>
                                       

                                      </p>
                                  </li>
                                  <li>
                                      <span><i class="far fa-envelope"></i></span>
                                      <p><a href="mailto:danielshobe90@gmail.com">danielshobe90@gmail.com</a><br/>
                                        
                                      
                                      </p>
                                  </li>
                                  
                              </ul>
                        </div>
                 </div>
                 <div className="copyrighttext">
                        <p> Copyright: &copy; 2022 HAJA TIMES. All rights reserved.</p>
                </div>
           </div>
       </> 
    )
}

export default Footer;