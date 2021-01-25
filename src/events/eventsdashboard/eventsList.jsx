import React from 'react';
import EventsListItem from './EventListItem';

export default function EventsList({events}) {
    return (
        <div>
            {events.map(event => (
                <EventsListItem event={event} key={event.id}/>
            ))}
        </div>
    )
}