import React, { useEffect, useState } from 'react';
import { gapi } from "gapi-script";
import axios from "axios";
import LogoutButton from './../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';


// export function GoogleApiPage() {

  // const { logout } = useAuth0();
  // setTimeout(function(){
  //   logout({
  //     logoutParams: {
  //       returnTo: window.location.origin,
  //     },
  //   });
  // }, 3000000);

  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    
  // const [events, setEvents] = useState([]);

  // const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body;
  // const auth0UserId = auth0UserData.decodedToken.user.sub;

  export const getGAPIToken = async (auth0userid) => {
    const result = await axios(
      // `http://localhost:3301/googleAccessToken/gapi-token/${auth0userid}`,
      `https://group3backend-lukfolvarsky.onrender.com/googleAccessToken/gapi-token/${auth0userid}`,
    );
    // console.log(result.data);
    return(result.data);
  };

export const getAllPrimaryCalendarEvents = async (calendarId) => {
  const token = await getGAPIToken();
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
        console.log(response.data);
        // setEvents(events);
      },
      function (err) {
        return [false, err];
      }
    );
  }
  gapi.load('client', initGapi);
  };


  function getAllEvents(token) {
      return gapi.client.request({
        headers: {authorization: `Bearer ${token}`},
        path: `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
      });
  };

  function getAllCalendars(token) {
    return gapi.client.request({
      headers: {authorization: `Bearer ${token}`},
      path: `https://www.googleapis.com/calendar/v3/users/me/calendarList/`,
    });
  };

  // useEffect(() => {
  //   const events = getAllPrimaryCalendarEvents();
  //   setEvents(events);
  // }, []);

   
  // return (
  //   <div>
  //     <h1>Google Calendar API</h1>
  //     <button onClick={() => console.log(events)}>get calendar events (useState)</button>
  //     <ul>
  //         {Object.keys(events).map((item, i) => (
  //           <li className="" key={i}>
  //             <span className="">{events[item].summary}</span>
  //           </li>
  //         ))}
  //       </ul>
  //       <LogoutButton />
  //   </div>
  // );
// }