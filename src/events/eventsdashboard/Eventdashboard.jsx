import { React, useState, setEvents } from 'react';
import {Grid} from 'semantic-ui-react';
import EventForm from '../eventForm/Eventform';
import EventsList from './eventsList';
import {useSelector} from 'react-redux'


export default function EventDashboard(){

const {events} = useSelector(state => state.event);


    return (
        <Grid clearing >
             
            <Grid.Column width={10}>
                <EventsList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event filters</h2>
            </Grid.Column>
        </Grid>
    )
}


 