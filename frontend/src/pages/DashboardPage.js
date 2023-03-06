import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import axios from "axios";

import NavBar from "../components/navBar/MainNavBar";
import DashboardGridFirstRow from './../components/dashboard/DashboardGridFirstRow';
import DashboardGridSecondRow from '../components/dashboard/DashboardGridSecondRow';
import DashboardGridThirdRow from '../components/dashboard/DashboardGridThirdRow';


export default function DashboardPage() {
  const { isAuthenticated } = useAuth0();

  const url = `http:///localhost:3301`; 
  // const url = `https://group3backend-lukfolvarsky.onrender.com/usersInformation/users/exists?uid=`;
  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

  const userQueries = async () => {
    let userExists = await axios.get(`${url}/usersInformation/users/exists?uid=${auth0UserData.sub}`);
    console.log(userExists.data.length);
    if (userExists.data.length === 0 ) {
      await axios.post(`${url}/usersInformation/insert/user`, 
        {
          "uid": auth0UserData.sub,
          "first_name": auth0UserData.given_name,
          "last_name": auth0UserData.family_name,
          "user_email": auth0UserData.email,
          "phone_number": "",
          "chronotype_id": 5
        }
      );
    }
  };


  useEffect(() => {
    userQueries();
  });

  if (!isAuthenticated) {
    return (<p>Not authenticated!</p>);
  } 

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
  }
