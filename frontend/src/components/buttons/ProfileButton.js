import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '@mui/material/Button';

export default function ProfileButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  return (
    <Button variant="contained" onClick={handleLogin} type="button">
      Profile
    </Button>
  );
}