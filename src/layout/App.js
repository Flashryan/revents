import logo from './logo.svg';
import {React, useState} from 'react'
import './App.css';
import { Button, Container } from  'semantic-ui-react';
import EventDashboard from '../events/eventsdashboard/Eventdashboard';
import Navbar from '../features/Nav/Navbar.jsx';
import {Route, useLocation} from'react-router-dom';
import Homepage from '../features/home/homePage';
import EventDetailedPage from '../events/eventsDetailed/EventDetailedPage';
import EventForm from '../events/eventForm/Eventform';
import Sandbox from '../features/sandbox/sandbox';


export default function App() {

  const {key} = useLocation();

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
   <>
       <Route exact path='/' component={Homepage} />
      <Route path={'/(.+)'}
       render={() => (
        <>
           <Navbar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              <Route path='/events' component={EventDashboard} />
              <Route path='/sandbox' component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/createEvent' component={EventForm} key={key} />
            </Container>
            </>
      )} 
      />
    </>
  );
}
