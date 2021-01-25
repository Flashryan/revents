import {React, useState} from 'react';
import{Segment, Header, Form, Button, BreadcrumbSection} from 'semantic-ui-react';
import cuid from 'cuid';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {createEvent, updateEvent } from '../eventActions';
 

export default function EventForm({match, history}){

    const dispatch = useDispatch();

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id))

   const initialValues = selectedEvent ?? {
       title: '',
       description:'',
       city: '',
       venue: '',
       date: ''
   }


    const[values, setValues] = useState(initialValues);
    
    function handleFormSubmit(){

        selectedEvent 
        ? dispatch(updateEvent({...selectedEvent, ...values}))
        : dispatch (createEvent({...values,
            id: cuid(),
            hostedBy:'Bob',
            attendees:[],
            hostedPhotoURL: './ass'
        }));
        
        history.push('./events');  
    }


   function handleInputChange(e) {

    const {name, value} = e.target;

    setValues({...values, [name]: value })

   }

    return (

        <Segment clearing>
            <Header content={selectedEvent ? 'edit new event' : 'create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder="title" name='title' value={values.title} onChange = {(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" name='description' value={values.description} onChange = {(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" name='city' value={values.city} onChange = {(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" name='venue' value={values.venue} onChange = {(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" name='date' value={values.date} onChange = {(e) => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='submit' floated='right' content='Cancel' />
            </Form>
        </Segment>

    )
}