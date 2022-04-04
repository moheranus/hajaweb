import React from 'react'
import './MessageUs.css'
export default function MessageUs() {
  return (
    <>
    
     <div className="message-container">
       
       
        <div className="containers">
          <div className="contactInfo">
               <h2>Contact Info</h2>
               <ul className="infos">
                   <li>
                        <span><i class="fas fa-map-marker"></i></span>
                        <span>Akaki Kality, FSTU</span>
                    </li>
                    <li>
                          <span><i class="fas fa-envelope"></i></span>
                           <p><a href="mailto:danielshobe90@gmail.com "> danielshobe90@gmail.com</a><br/>         
                          </p>
                      </li>
                      <li>
                           <span><i class="fas fa-phone "></i></span>
                           <p><a href="tel:+251949052848 "> +251 949 052 848</a><br/>
                               
                            </p>
                        </li>
                        <ul className="sci">
                                    <li><a href="/"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                              </ul>

               </ul>
            
          </div>
          <div className="contactForm">
            
             <h2>Send a message</h2>

             <div className="formBox w50">
               
               <input type="text" placeholder="first name" required></input>
               
               </div>
               <div className="formBox w50">
               
               <input type="text" placeholder="last name" required></input>
               
               </div>
               <div className="formBox w50">
               
               <input type="email" placeholder="email" required></input>
               
               </div>
               <div className="formBox w50">
               
               <input type="tele"placeholder="phone number" required></input>
               
               </div>
               <div className="formBox w100">
               
               <textarea type="text"placeholder="write your message here..." required></textarea>
               
               </div>
               
               <button type="submit" className="subm-btn">SEND</button>



            </div>
          
        </div>
       
       </div>
  
    </>
  )
}
