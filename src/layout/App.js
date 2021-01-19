import logo from './logo.svg';
import {React, useState} from 'react'
import './App.css';
import { Button } from  'semantic-ui-react';
import EventDashboard from '../events/eventsdashboard/Eventdashboard';
import Navbar from '../features/Nav/Navbar.jsx'


function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null)

  function handleSelectedEvent(event){
    setSelectedEvent(event)
    setFormOpen(true)
}

function handleCreateFormOpen(){
  setSelectedEvent(null)
  setFormOpen(true)
}

  return (
    <div className="App">
      <Navbar setFormOpen={setFormOpen} />
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectedEvent} selectedEvent={selectedEvent} />
    </div>
  );
}

export default App;
