import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from '@mui/material';

function LogoutButton() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button variant="contained" onClick={handleLogout} type="button">
      Log Out
    </Button>
  );
}

export default LogoutButton;
