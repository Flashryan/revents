import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventsListAttendee({attendee}){
    return (
        <List.Item>
            <Image size='tiny' circular src={attendee.photoURL} />
        </List.Item>
    )
}