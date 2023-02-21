import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import './ProfilePage.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 className='head1'>Profile</h1>
      <img src={user.picture} alt=''
      style={{  width: 200, height: 200,  position:"absolute" , left:125 , top:150, zIndex: 999, borderRadius:400}}
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
    <Card style={{ width: '45rem', height:'22rem', position:"absolute" , left:'-10rem' , top:'-5.5rem', borderRadius:'2rem', backgroundColor: 'whitesmoke'}}>
      <ListGroup variant="flush">
        <ListGroup.Item className="item">Name: {user.name}</ListGroup.Item>
        <ListGroup.Item className="item">Email: {user.email}</ListGroup.Item>
        <ListGroup.Item className="item">Phone: </ListGroup.Item>
        <ListGroup.Item className="item">Address:</ListGroup.Item>
      </ListGroup>
    </Card>
          
          </Box>

              </div>
  );
}



export default ProfilePage;

