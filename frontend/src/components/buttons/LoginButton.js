import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '@mui/material/Button';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  return (
    <Button variant="contained" onClick={handleLogin} type="button">
      Login With Google
    </Button>
  );
}
