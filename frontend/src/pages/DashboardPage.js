import React from 'react';
import NavBar from "../components/navBar/MainNavBar";
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Typography } from '@mui/material';
import { headerNavBarWidth } from '../components/navBar/HeaderNavBar';
import DashboardItems from './../components/dashboard/DashboardItems';
import { Box } from '@mui/system';

export default function DashboardPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <NavBar />
        <Grid 
          sx={{ 
            width: headerNavBarWidth-34,
            height: "85vh",
            // backgroundColor: "red", 
            display: "flex",
            alignItems: "center", 
            justifyContent: "center",
            ml: 32, mt: -5, mr: 2, 
            pr: 10, pl: 10
          }}
        >
          {/* <DashboardItems /> */}
          {/* <Box sx={{backgroundColor: "#D9D9D9", width:"304px", height: "186px", borderRadius: '16px'}}></Box> */}
          <Box sx={{backgroundColor: "#D9D9D9", width:"304px", height: "186px", borderRadius: '16px'}}></Box>
        </Grid>
      </>
    );
else 
  return (<p>Not Authenticated!</p>);
}