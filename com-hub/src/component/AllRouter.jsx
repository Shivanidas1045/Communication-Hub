import React from 'react'
import Event from '../pages/Event'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import CreateEvent from '../pages/CreateEvent';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const AllRouter = () => {
  return (
    <div>

<Routes>
     <Route path="/"     element={<Home/>}/>
     <Route path="/event" element={<Event/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/createevent" element={<CreateEvent/>}/>
     <Route path="/Login"     element={<Login/>}/>
     <Route path="/Signup"     element={<Signup/>}/>


</Routes>





    </div>
  )
}

export default AllRouter