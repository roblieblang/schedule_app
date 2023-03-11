import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      access_type: 'offline', 
      connection_scope: 'https://www.googleapis.com/auth/calendar.events.readonly', 
      // approval_prompt: 'force',
      appState: {
        returnTo: `/dashboard`,
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  return (
    <Button variant="contained" onClick={handleLogin} type="button">
      Get Started!
    </Button>
  );
}
