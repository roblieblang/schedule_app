import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { google } = require('googleapis')
const { OAuth2 } = google.auth
import axios from "axios"
import {googleIdPAccessToken as accessToken} from './auth0TokenHandler.js';

const oAuth2CLient = new OAuth2(
    '662579312188-a6n1p3au6a7gj4vm2f19ucl1nsooco7e.apps.googleusercontent.com', 
    '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'
);

oAuth2CLient.setCredentials({ 
    refresh_token: '1//04ZN521yiF2ujCgYIARAAGAQSNwF-L9IrFXFYQxDE82jaQqSvl1PgWVmy9odt32hgP_usg6G2xFFcOCvKkZhkZlWnO9y5VFvgHOk' 
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2CLient });

// async function listEvents(oAuth2CLient) {
//     const response = await calender.events.list({
//         calendarId: 'primary', 
//         timeMin: new Date().toISOString(), 
//         maxResults: 10, 
//         singleEvents: true, 
//         orderBy: 'startTime',
//     });
//     const events = response.data.items;
//     if (!events || events.length == 0) {
//         console.log('No upcoming events found.');
//         return;
//     }
//     console.log('Upcoming 10 events:');
//     events.map((event, i) => {
//         const start = event.start.startTime || event.start.date;
//         console.log(`${start} - ${event.summary}`);
//     })
// }

let gCalAPIReqParams = {
    url: `https://www.googleapis.com/calendar/v3/calendars/nonenonenonenone213@gmail.com/events`,
    headers: {Authorization: `Bearer ${oAuth2CLient}`}
  };
const events = await axios(gCalAPIReqParams.url, { headers: gCalAPIReqParams.headers } );
console.log(events)