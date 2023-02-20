import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import './ProfilePage.css';
import ProfileCard from '../components/profile/ProfileCard';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt=''
      style={{  width: 200, height: 200,  position:"absolute" , left:20 , top:150}}
      />
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <style>{'body { background-color: lightgrey; }'}</style>
      <Box 
            gridColumn="span 1" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <ProfileCard 
              card={ 
                {
                  "Name": "busiestCalendar", 
                  "title": "Busiest Calendar", 
                  "mainContent": "Your busiest calendar was {user calendar with most events}."
                }
              }
            />
          </Box>

          <div style={{ display: 'block', width: 700, padding: 30 }}></div>
          <Container className='p-4'>  
          <Col md={3}>  
          <ListGroup>  
         <ListGroup.Item>List Item 1</ListGroup.Item>  
         <ListGroup.Item>List Item 2</ListGroup.Item>  
         <ListGroup.Item>List Item 3</ListGroup.Item>  
         <ListGroup.Item>List Item 4</ListGroup.Item>  
         <ListGroup.Item>List Item 5</ListGroup.Item>  
          </ListGroup>  
          </Col>  
          </Container>  
              </div>
  );
}



export default ProfilePage;

