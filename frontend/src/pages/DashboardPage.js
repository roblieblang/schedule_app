import React from 'react';
import NavBar from "../components/navBar/MainNavBar";
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


function DashboardPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <NavBar />
        <Box sx={{ 
          width: 300,
          height: 300,
          backgroundColor: "red", 
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
          ml: 35, mt: -3
          }}>
            <Typography variant="h3">
              Hello World
            </Typography>
        </Box>
      </>
    );
else 
  return (<p>Not Authenticated!</p>)
}

export default DashboardPage;
