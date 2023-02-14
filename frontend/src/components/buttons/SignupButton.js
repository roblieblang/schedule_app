import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import Button from '@mui/material/Button';


function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  };

  return (
    <Button variant="contained" onClick={handleSignUp} type="button">
      Sign Up
    </Button>
  );
}

export default SignupButton;
