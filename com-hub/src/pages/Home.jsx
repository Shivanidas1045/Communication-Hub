import React from 'react';
import { useNavigate } from 'react-router';
import "./Home.css"


const Home = () => {
    

    const navigate=useNavigate()


  return (
    <>
    <div>
      
<h1 class="text-center text-dark mt-4 "> Connect Communities</h1>
<h3 class="text-center text-secondary">Bridging gaps between faiths with tech and a dash of fun!</h3></div>
    
    <div class="container-md mt-5 mb-5 ">
        <img  src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif" class="rounded-circle  w-25 me-3 animate__animated animate__tada" alt="1st" />
        <img src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp" class="rounded-circle  w-25 me-3 animate__animated animate__tada" alt="2nd" />
        <img src="https://communionhub.org/static/media/event-3.518ca15d6caff0f2e0c9.avif" class="rounded-circle  w-25 me-3 animate__animated animate__tada" alt="3rd" />
        
    </div>
    <button type="button"class="btn bg-primary text-dark mt-10 btn-lg"  onClick={() => navigate("/about")}>
              View Our Services
            </button>
            <div class="container-md mt-5 mb-5 ">
<h1 class="text-center fs-1">Join the Conversation</h1>
<h2 class="text-center text-primary"> Build Connections</h2>
<img src="https://communionhub.org/static/media/header-img-1.adf1de5fdab6ef84caff.avif" class="w-50 me-3 img-hover" alt="img1" />
<img src="https://communionhub.org/static/media/header-img-2.f732844f4b0d9b3d357e.avif" class="w-25 img-hover" alt="img2" />

</div>

<div class="container-lg mt-5 mb-5 bg-dark bg-gradient d-flex ">

<div class="container-sm mt-5 bg-dark bg-gradient ">
<h1 class="text-light text-center ">Uniting Communities Through</h1>
    <h1 class="text-primary text-center mb-3">Inspiring Events</h1>
    <p class="text-center text-light fs-4 fst-italic">At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together to share meaningful experiences. From workshops to conferences, 
        every event is designed to leave a lasting impact on our attendees.</p>
</div>

<div class="container-sm mt-5  bg-dark bg-gradient ">
    <img src="https://communionhub.org/static/media/avatar-1.d05953acd9d246beba5b.avif"  class="w-25"alt="trusted" />
    <h3 class="text-center text-light fs-4 mt-4">Trusted by Over 15k+ Individuals Worldwide</h3>
    <button class="btn lg bg-light text-dark mt-3 p-3" onClick={()=>navigate('/event')}>Explore Events</button>
</div>
    </div>

    <div class="container bg-secondary border-rounded p-2">
  <div class="row">
    <div class="col-md-4">
      <img src="https://communionhub.org/static/media/hero-2.1736b71541634509a875.avif" class="img-fluid rounded shadow animate__animated animate__zoomIn" alt="Image 1"/>
    </div>
    <div class="col-md-4">
      <img src="https://communionhub.org/static/media/hero-5.a3a92fc524360c0dc26e.avif" class="img-fluid rounded shadow animate__animated animate__zoomIn" alt="Image 2"/>
    </div>
    <div class="col-md-4">
      <img src="https://communionhub.org/static/media/hero-6.7d2a560b61405b8f97d2.avif" class="img-fluid rounded shadow animate__animated animate__zoomIn" alt="Image 3"/>
    </div>
    
  </div>
</div>

<div class="container-lg bg-white mt-5 mb-5 p-5">
    <h1 class="text-center fs-1 fw-3">Trusted by Over 1500+ Active</h1>
    <h1 class="text-center fs-1 fw-3">Global Users</h1>
    <p class="text-center text-secondary fs-5">Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.</p>

</div>






</>
  )
}

export default Home