import { React, useState } from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';
import EventForm from '../eventForm/Eventform';
import EventsList from './eventsList';
import {sampleData} from '../../app/api/sampleData'

export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}){

const [events, setEvents] = useState(sampleData);


function handleCreateEvent(event) {
    setEvents([...events, event])
}

function handleUpdateEvent(updatedEvent){
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
    selectEvent(null)
    setFormOpen(false)
}

function handleDeleteEvent(eventId) {

    setEvents(events.filter(evt => evt.id !== eventId))
}



    return (
        <Grid clearing >
             
            <Grid.Column width={10}>
                <EventsList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && 
                (<EventForm setFormOpen={setFormOpen} createEvent={handleCreateEvent} setEvents={setEvents} createEvent={handleCreateEvent} selectedEvent={selectedEvent} updatedEvent={handleUpdateEvent}  key={selectedEvent ? selectedEvent.id : null}/>) }
            </Grid.Column>
        </Grid>
    )
}


 