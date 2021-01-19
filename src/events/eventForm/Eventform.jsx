import {React, useState} from 'react';
import{Segment, Header, Form, Button, BreadcrumbSection} from 'semantic-ui-react';
import cuid from 'cuid';


export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent}){

   const initialValues = selectedEvent ?? {
       title: '',
       description:'',
       city: '',
       venue: '',
       date: ''
   }

    const[values, setValues] = useState(initialValues);
    
    function handleFormSubmit(){
        createEvent({...values,
        id: cuid(),
        hostedBy:'Bob',
        attendees:[],
        hostedPhotoURL: './ass'})
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
                <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel' />
            </Form>
        </Segment>

    )
}