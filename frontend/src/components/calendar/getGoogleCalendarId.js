import React from 'react';
import '../../stylesheets/calendar/CalendarPage.css';
import NavBar from '../../components/navBar/MainNavBar';
import { useAuth0 } from '@auth0/auth0-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const GetGoogleCalendarId = () => {
    const { user } = useAuth0();

    if (!user) {
      return null;
    }

    return (
        <>
        <NavBar />
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, googleCalendarPlugin ]}
          googleCalendarApiKey= 'AIzaSyA9pCm2UaDI0STORfACvB89D_lt6rdzme8'
          eventSources={[
            {googleCalendarId: user.email}
          ]}
        />
        </>
      )
}

export default GetGoogleCalendarId;