import React from 'react'
import '../stylesheets/calendar/CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default class DemoApp extends React.Component {

    render() {
      return (
        <>
        <NavBar />
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin, googleCalendarPlugin ]}
          dateClick={this.handleDateClick}
          googleCalendarApiKey= 'AIzaSyA9pCm2UaDI0STORfACvB89D_lt6rdzme8'
          eventSources={[
            {googleCalendarId: 'csc394test@gmail.com'}
          ]}
        />
        </>
      )
    }
  
    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
  
  }