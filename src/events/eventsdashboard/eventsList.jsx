import React from 'react';
import EventsListItem from './EventListItem';

export default function EventsList({events, selectEvent, deleteEvent}){
    return (
        <div>
            {events.map(event => (
                <EventsListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
            ))}
        </div>
    )
}