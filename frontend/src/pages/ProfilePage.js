import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import './ProfilePage.css';
import ProfileCard from '../components/profile/ProfileCard';
import { borders } from '@mui/system'


function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt=''
      style={{  width: 200, height: 200,  position:"absolute" , left:125 , top:180, zIndex: 999}}
      />
      <div id="box1">
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>Age:</li>
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
            <ProfileCard 
              card={ 
                {
                  "Name": "Info", 
                  "title": "Info", 
                  "mainContent": "Full Name, Email, Phone, Address"
                }
              }
            />
          </Box>

              </div>
  );
}



export default ProfilePage;

