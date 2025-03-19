import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><span class="badge bg-primary text-black me-1 p-3">Communication💬</span><span class="badge bg-white text-black p-3">Hub</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link active me-5" aria-current="page" href="/"> <span class='badge border fs-4'>Home</span></a>
        <a class="nav-link" href="/event"> <span class='badge border fs-4 me-5'>Events</span></a>
    
        <a class="nav-link" href="/about"><span class='badge border fs-4'>About</span></a>
        <div class="position-absolute top-0 end-0 mt-2 me-3">
        <a class="navbar-link" href="/signup"><span class="badge bg-primary text-black me-1 p-3 mt-2 ">Sign</span><span class="badge bg-white text-black me-3 p-3">Up</span></a>
        <a class="navbar-link" href="/login"><span class="badge bg-primary text-black me-1 p-3 mt-2 ">Log</span><span class="badge bg-white text-black p-3">In</span></a>
</div>
        

        
      </div>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Navbar