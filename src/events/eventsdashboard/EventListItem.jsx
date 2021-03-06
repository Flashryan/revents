import React from 'react';
import { Button, Icon, Item, List, Segment, Image } from 'semantic-ui-react';
import EventsListAttendee from './EventListAttendee';
import EventsList from './eventsList';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../eventActions';

export default function EventsListItem({event}){
    const dispatch = useDispatch();
    return (
        <Segment.Group >
            <Segment textAlign='left'>
                <Item.Group >
                    <Item>
                    <Image size='tiny' circular src={event.photoURL} />
                        <Item.Content>
                            <Item.Header textAlign="left" as="h1" content={event.title} />
                            <Item.Description content={event.description} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon  name="clock" /> {event.date}
                    <Icon name="marker" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventsListAttendee key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
    <div>{event.description}</div>
                <Button color="facebook" floated="right" content="view" as={Link} to={`/events/${event.id}`} />
                <Button color="red" floated="right" content="delete" onClick={() => dispatch(deleteEvent(event.id))} />
            </Segment>
        </Segment.Group>
    )
}