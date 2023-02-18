import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.css';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
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
