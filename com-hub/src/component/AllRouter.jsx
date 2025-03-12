import React from 'react'
import Event from '../pages/Event'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';

const AllRouter = () => {
  return (
    <div>

<Routes>
     <Route path="/"     element={<Home/>}/>
     <Route path="/event" element={<Event/>}/>
     <Route path="/about" element={<About/>}/>

</Routes>





    </div>
  )
}

export default AllRouter