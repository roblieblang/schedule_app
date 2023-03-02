import React, { useEffect, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { gapi } from "gapi-script";
import axios from "axios";
import Event from './Event';
import LogoutButton from './../components/buttons/LogoutButton';


export default function GoogleApiPage() {
  const ACCESS_TOKEN = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
  const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const SCOPES = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";
    
  // Grab google API access token
  const [gAPIToken, setGAPIToken] = useState(null);
  const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body;
  const auth0UserId = auth0UserData.decodedToken.user.sub;

  useEffect(() => {
    // get token
    const getGAPIToken = async () => {
      const result = await axios(
        `http://localhost:3301/googleAccessToken/gapi-token/${auth0UserId}`,
      );
      setGAPIToken(result.data);
    };
    getGAPIToken();
  }, );

   
  return (
    <div>
      <h1>Google Calendar API</h1>
        {/* <button onClick={()=> console.log(auth0UserId)}>Print auth0 user id to the console</button>
        <hr />
        <button onClick={()=> console.log(googleToken)}>Print google access token to the console</button> */}
        {/* <ul>
          {events?.map((event) => (
            <li key={event.id}>
              <h4>Event Title:</h4>
              <p>{event.summary}</p>
              <h4>Creator:</h4>
              <p>{event.creator.email}</p>
            </li>
          ))}
        </ul> */}
        <LogoutButton />
    </div>
  );
}