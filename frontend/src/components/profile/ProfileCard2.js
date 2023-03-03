import React from 'react';
import './ProfileCard2.css';
import { useAuth0 } from '@auth0/auth0-react';
import ListGroup from 'react-bootstrap/ListGroup';

const ProfileCard2 = () => {
    const { user } = useAuth0();

    if (!user) {
      return null;
    }

    return (
        <div className='card2'>
      <ListGroup variant="flush">
        <ListGroup.Item className="item">Name: {user.name}</ListGroup.Item>
        <ListGroup.Item className="item">Email: {user.email}</ListGroup.Item>
        <ListGroup.Item className="item">Phone: </ListGroup.Item>
        <ListGroup.Item className="item">Address:</ListGroup.Item>
      </ListGroup>
        </div>
    )
}

export default ProfileCard2;