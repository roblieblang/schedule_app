import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import axios from "axios";
import { gapi } from "gapi-script";

import NavBar from "../components/navBar/MainNavBar";
import DashboardGridFirstRow from './../components/dashboard/DashboardGridFirstRow';
import DashboardGridSecondRow from '../components/dashboard/DashboardGridSecondRow';
import DashboardGridThirdRow from '../components/dashboard/DashboardGridThirdRow';
import { getGAPIToken } from '../apis/GoogleApiPage';



export default function DashboardPage() {
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const { isAuthenticated, logout } = useAuth0();

  const [calendarEvents, setCalendarEvents] = useState([]);


  const url = `http:///localhost:3301`; 
  // const url = `https://group3backend-lukfolvarsky.onrender.com/usersInformation/users/exists?uid=`;
  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

  const userQueries = async () => {
    let userExists = await axios.get(`${url}/usersInformation/users/exists?uid=${auth0UserData.sub}`);
    // console.log(userExists.data.length);
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

  setTimeout(function(){
    console.log("Logging out...");
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, 3000000);

  const getGAPIToken = async (auth0userid) => {
    const result = await axios(
      // `http://localhost:3301/googleAccessToken/gapi-token/${auth0userid}`,
      `https://group3backend-lukfolvarsky.onrender.com/googleAccessToken/gapi-token/${auth0userid}`,
    );
    // console.log(result.data);
    return(result.data);
  };

  const getAllEventsForACalendar = async (calendarId) => {
    const token = await getGAPIToken(auth0UserData.sub);
    function initGapi (){
      gapi.client.init({
        apiKey: API_KEY,
        access_token: token,
        discoveryDocs: [DISCOVERY_DOC],
      })
      .then(function () {
        return gapi.client.request({
          headers: {authorization: `Bearer ${token}`},
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        });
      })
      .then(
        (response) => {
          let events = response;
          // console.log(response.result.items);
          setCalendarEvents(events);
        },
        function (err) {
          console.log(err);
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            });
          return [false, err];
        }
      );
    }
    gapi.load('client', initGapi);
  };

  // const getListOfCalendars = async () => {
  //   const token = await getGAPIToken(auth0UserData.sub);
  //   function initGapi (){
  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       access_token: token,
  //       discoveryDocs: [DISCOVERY_DOC],
  //     })
  //     .then(function () {
  //       return gapi.client.request({
  //         headers: {authorization: `Bearer ${token}`},
  //         path: `https://www.googleapis.com/calendar/v3/users/me/calendarList/`,
  //       });
  //     })
  //     .then(
  //       (response) => {
  //         let calendars = response;
  //         // console.log(response.result.items);
  //         // setListOfCalendars(calendars);
  //       },
  //       function (err) {
  //         console.log(err);
  //         logout({
  //           logoutParams: {
  //             returnTo: window.location.origin,
  //           },
  //         });
  //         return [false, err];
  //       }
  //     );
  //   }
  //   gapi.load('client', initGapi);
  // };



  useEffect(() => {
    userQueries();

    // const events = getAllEventsForACalendar();
    // setCalendarEvents(events);
    
    // const calendars = getListOfCalendars();
    // setListOfCalendars(calendars);
  }, []);

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
          <DashboardGridFirstRow 
            // calendarEvents={calendarEvents} 
            // listOfCalendars={listOfCalendars}
          />
          <DashboardGridSecondRow />
          <DashboardGridThirdRow />
        </Box>
      </>
    );
  }

  export {getGAPIToken};