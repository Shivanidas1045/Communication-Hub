import React, { useState } from 'react'

const Event = () => {
  
  const [events,setEvents]=useState([
    { id: 1, img:"/pics/church-service.png", title: "Church Service", date: "2025-03-20", location: "St. Peter's Church", description: "Weekly church gathering.", category:"Social",msg:"🌟Join others in this event!"},
        { id: 2, img:"/pics/food-drive.png", title: "Food Distribution", date: "2025-04-02", location: "Bhojanalay", description: "Helping the needy with food supplies.",category:"Charity",msg:"🌟Join others in this event!"},
        { id: 3,  img:"/pics/gathering.png", title: "Gathering", date: "2025-04-10", location: "Seva Bhavan", description: "Meet professionals and expand your network.",category:"Social",msg:"🌟Join others in this event!" },
        { id: 4, img:"/pics/holi-celebration.png", title: "holi Celebration", date: "2025-03-12", location: "Kenalite", description: "Celebrate the festival of colors",category:"Religious",msg:"🌟Join others in this event!" },
        { id: 5, img:"/pics/charity-drive.png", title: "Charity Drive", date: "2025-04-10", location: "Ram Mandir", description: "Come and involve in the charity drive",category:"Charity",msg:"🌟Join others in this event!" },
        { id: 6, img:"/pics/ramnavmi.png", title: "Ram Navmi", date: "2025-04-10", location: "Hanuman Mandir", description: "Enjoy the festival with us.",category:"Religious",msg:"🌟Join others in this event!" },
       
  ])
    
      
      const [filter,setFilter]=useState("All");
      const [addEvent,setAddEvent]=useState({title:"",date:"",location:"",description:"",category:""})

const handleFilterChange=(category)=>{
setFilter(category);
}
  const filteredEvents = filter === "All" ? events : events.filter(el => el.category === filter);


   const handleInputChange = (e) => {
    setAddEvent({ ...addEvent, [e.target.name]: e.target.value });
  };

   const handleAddEvent = (e) => {
    e.preventDefault();
    if (!addEvent.title || !addEvent.date || !addEvent.category || !addEvent.location || !addEvent.description) return;
    setEvents([...events, { id: events.length + 1, ...addEvent }]);
    setAddEvent({ title:"", date: "", category: "", location: "", description: "" });
  };

  


  return (
    <>
    <div class="mb-3 mt-5">
        <div className="btn-group gap-3" role="group">
          <button type="button" class="btn bg-dark text-light p-2 fs-4 " onClick={() => handleFilterChange("All")}>All</button>
          <button type="button" class="btn bg-dark text-light p-2 fs-4 "  onClick={() => handleFilterChange("Religious")}>Religious</button>
          <button type="button" class="btn bg-dark text-light p-2 fs-4 " onClick={() => handleFilterChange("Social")}>Social</button>
          <button type="button" class="btn bg-dark text-light p-2 fs-4 " onClick={() => handleFilterChange("Charity")}>Charity</button>
        </div>
        </div>




      
    
<div class="row">
  {filteredEvents.map((el) => (
    <div key={el.id} class="col-md-4">
      <div class="card mt-5 mb-5">
        <img src={el.img} class="card-img-top" alt="events_images" />
        <div class="card-body">
          <h3 class="card-title fst-italic">{el.title}</h3>
          <p class="card-text">{el.description}</p>
          <h5>{el.location}</h5>
          <p class="text-secondary">{`Date:- ${el.date}`}</p>
          <h5>{el.category}</h5>
          <p class="text-center text-primary">{el.msg}</p>
        </div>
      </div>
    </div>
     
  ))}




<form className="mb-4 " onSubmit={handleAddEvent}>
        <h4 class="mt-5 mb-5 text-primary  fw-3 fst-italic ">Add New Event</h4>
       
        <div className="mb-2 ">
          <input type="text" className="form-control" name="title" placeholder="Event Title" value={addEvent.title} onChange={handleInputChange} required />
        </div>
        <div className="mb-2">
          <input type="date" className="form-control" name="date" value={addEvent.date} onChange={handleInputChange} required />
        </div>
        <div className="mb-2">
          <select className="form-control" name="category" value={addEvent.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>
        <div className="mb-2">
          <input type="text" className="form-control" name="location" placeholder="Location" value={addEvent.location} onChange={handleInputChange} required />
        </div>
        <div className="mb-2">
          <textarea className="form-control" name="description" placeholder="Description" value={addEvent.description} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-dark p-3">Add Event</button>
      </form>





</div>

</>
    
  )
}

export default Event