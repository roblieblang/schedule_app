import React from 'react';
import NavBar from "../components/navBar/MainNavBar";
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';


function DashboardPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <NavBar />
        <Grid sx={{ 
          width: 900,
          height: 600,
          backgroundColor: "red", 
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
          ml: 32, mt: -5, mr: 10
          }}>
            <Typography variant="h3">
              Hello World
            </Typography>
        </Grid>
      </>
    );
else 
  return (<p>Not Authenticated!</p>)
}

export default DashboardPage;
