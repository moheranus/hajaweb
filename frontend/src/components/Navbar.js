import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 
import Dropdown from './Dropdown'
function Navbar() {   
    const[click, setClick] = useState(false);
    const[dropdown, setDropdown] = useState(false);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=>setClick(false); 

    const onMouseEnter =()=>{
        if(window.innerWidth<960){
            setDropdown(false);

        }
        else{
            setDropdown(true);
        }
    };
    const onMouseLeave =()=>{
        if(window.innerWidth<960){
            setDropdown(false);

        }
        else{
            setDropdown(false);
        }
    };
  return (
    <>
    <nav className="navbar"> 
         <div className="navbar-container">
              <Link to='/'className="navbar-logo">
                 HAJA
                  <img src='frontend/public/images/hajalogo.png'alt='' />
              </Link>
              <div className='menu-icon'onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                  <li className='nav-item'onMouseEnter={onMouseEnter}onMouseLeave={onMouseLeave}>
                       <Link to='/news'className='nav-links'onClick={closeMobileMenu}>
                           News <i className='fa fa-caret-down'></i>
                      </Link>
                      {dropdown && <Dropdown />}
                  </li>
                  <li className='nav-item'>
                       <Link to='/events'className='nav-links'onClick={closeMobileMenu}>
                           Events
                      </Link>
                  </li>
                  <li className='nav-item'>
                       <Link to='/membership'className='nav-links'onClick={closeMobileMenu}>
                           Membership
                      </Link>
                  </li>
                  <li className='nav-item'>
                       <Link to='/vision'className='nav-links'onClick={closeMobileMenu}>
                           Vision
                      </Link>
                  </li>
                  <li className='nav-item'>
                       <Link to='/projects'className='nav-links'onClick={closeMobileMenu}>
                           Projects
                      </Link>
                  </li>
              </ul>
         </div>
     </nav>
    
    </>
  )
}

export default Navbar








