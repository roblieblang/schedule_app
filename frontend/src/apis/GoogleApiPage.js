import React, { useEffect, useState } from 'react';
import { gapi } from "gapi-script";
import axios from "axios";
import LogoutButton from './../components/buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';


export default function GoogleApiPage() {

  const { logout } = useAuth0();
  // janky (yet effective) way to ensure user access token stays current, without a refresh token
  // if time I'll do this properly
  setTimeout(function(){
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  }, 3200000);

  // const ACCESS_TOKEN = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
  const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  // const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  // const SCOPES = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";
    
  const [events, setEvents] = useState([]);

  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body;
  const auth0UserId = auth0UserData.decodedToken.user.sub;

  const getGAPIToken = async () => {
    const result = await axios(
      `http://localhost:3301/googleAccessToken/gapi-token/${auth0UserId}`,
    );
    console.log(result.data);
    return(result.data);
  };

const getEvents = async () => {
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
        path: `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
      });
    })
    .then(
      (response) => {
        let events = response.result.items;
        console.log(response.result.items);
        setEvents(events);
      },
      function (err) {
        return [false, err];
      }
    );
  }
  gapi.load('client', initGapi);
  };


  useEffect(() => {
    const events = getEvents();
    setEvents(events);
  }, []);

   
  return (
    <div>
      <h1>Google Calendar API</h1>
      <button onClick={() => console.log(events)}>get calendar events (useState)</button>
      <ul>
          {Object.keys(events).map((item, i) => (
            <li className="" key={i}>
              <span className="">{events[item].summary}</span>
            </li>
          ))}
        </ul>
        <LogoutButton />
    </div>
  );
}