import React from 'react';
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react';


export default function Homepage({history}){
    return (
      
          <Segment textAlign='center' vertical className='mastHead'>
              <Container>
                  <Header as={'h1'} inverted>
                      <Image size={'massive'} src='./assets/logo.png' style={{marginBottom:12}} />
                  </Header>
                  <Button onClick={() => history.push('/events')} size={'huge'} inverted>
                      Get Started
                      <Icon name={'right arrow'} inverted />
                  </Button>
              </Container>
          </Segment>
    
    )
}