import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import './ProfilePage.css';
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


=======
import ProfileCard from '../components/profile/ProfileCard';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
>>>>>>> 98541604ac8080d1be0c57c04704fe600316743f


function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
<<<<<<< HEAD
      <h1 className='head1'>Profile</h1>
      <img src={user.picture} alt=''
      style={{  width: 200, height: 200,  position:"absolute" , left:125 , top:180, zIndex: 999, borderRadius:400}}
      />
      <h2 className='head2'>{user.name}</h2>
      <div className='box1'>
      <li>Age:</li>
      <li>Occupation: </li>
      <li>My Chronotype: </li>
      <style>{'body { background-color:#E0E0E0; }'}</style>
      </div>
      <Box 
      style={{
      position: 'absolute', 
      left: '40%', 
      top: '25%',
      transform: 'translate(-50%, -50%)'
  }}
          >
    <Card style={{ width: '45rem', height:'22rem', position:"absolute" , left:'-10rem' , top:'-3rem', borderRadius:'2rem', backgroundColor: 'whitesmoke'}}>
      <ListGroup variant="flush">
        <ListGroup.Item className="item">Name: {user.name}</ListGroup.Item>
        <ListGroup.Item className="item">Email: {user.email}</ListGroup.Item>
        <ListGroup.Item className="item">Phone: </ListGroup.Item>
        <ListGroup.Item className="item">Address:</ListGroup.Item>
      </ListGroup>
    </Card>
          
          </Box>

=======
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
>>>>>>> 98541604ac8080d1be0c57c04704fe600316743f
              </div>
  );
}



export default ProfilePage;

