import React from 'react';
import '../stylesheets/calendar/CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import { useAuth0 } from '@auth0/auth0-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import GetGoogleCalendarId from '../components/calendar/getGoogleCalendarId';

const CalendarPage = () => {
      return (
        <GetGoogleCalendarId/>
      )
    }  

export default CalendarPage;