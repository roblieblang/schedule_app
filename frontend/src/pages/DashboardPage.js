import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';

import NavBar from "../components/navBar/MainNavBar";
import DashboardGridFirstRow from './../components/dashboard/DashboardGridFirstRow';
import DashboardGridSecondRow from '../components/dashboard/DashboardGridSecondRow';
import DashboardGridThirdRow from '../components/dashboard/DashboardGridThirdRow';


export default function DashboardPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <NavBar />

        <Box 
          marginLeft={32}
          marginTop={2}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <DashboardGridFirstRow />
          <DashboardGridSecondRow />
          <DashboardGridThirdRow />
        </Box>
      </>
    );
else 
  return (<p>Not Authenticated!</p>);
}
