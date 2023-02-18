import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <img src={user.picture} alt='' />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default ProfilePage;
