import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import '../stylesheets/profile/ProfilePage.css';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileCard2 from '../components/profile/ProfileCard2';

function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 className='head1'>Profile</h1>
      <Box sx={{ml: 20, mt: 10, mr: 0}}>
      <ProfileCard/>
      </Box>
      <Box sx={{ml: 32, mt: 10, mr: 10}}>
      <ProfileCard2/>
      </Box>
    </div>
  );
}



export default ProfilePage;

