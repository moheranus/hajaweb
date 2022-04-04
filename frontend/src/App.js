/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';


import News from './components/pages/News';
import Event from './components/pages/Event';
import Membership from './components/pages/Membership';
import Vision from './components/pages/Vision';
import Project from './components/pages/Project';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
import All from './components/pages/All';
import Academic from './components/pages/Academic';
import Economic from './components/pages/Economic';

import Political from './components/pages/Political';
import Psychology from './components/pages/Psychology';
import Spritual from './components/pages/Spritual';
import Technology from './components/pages/Technology';
import CreateAccount from './components/pages/CreateAccount';

import MessageUs from './components/pages/MessageUs';

function App() {
  return (
    <>
     <Router>
         <Navbar />
         
          
         <Routes>
         <Route path='/' element={<News />} />
           <Route path='/news' element={<News />} />
           <Route path='/events' element={<Event />} />
           <Route path='/membership'element={<Membership />} />
           <Route path='/vision' element={<Vision />} />
           <Route path='/projects' element={<Project />} />
           <Route path='/contactus'element={<ContactUs />} />
           <Route path='/signup' element={<SignUp />} />

           <Route path='/all' element={<All />} />
           <Route path='/academic' element={<Academic />} />
           <Route path='/economic' element={<Economic />} />
           
           <Route path='/political' element={<Political />} />
           <Route path='/psychology' element={<Psychology />} />
           <Route path='/spritual' element={< Spritual/>} />
           <Route path='/technology' element={<Technology />} />
           <Route path='/createAccount' element={<CreateAccount />} />
           <Route path='/message-us' element={<MessageUs />} />
           <Route path='/footer' element={<Footer />} />

         </Routes>
         <Footer />
         
     </Router>
     
    </>
  );
}

export default App;
