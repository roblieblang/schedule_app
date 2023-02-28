import React from 'react'
import CalendarBoard from '../components/calendar/CalendarBoard';
import CalendarFiller from "../components/calendar/CalendarFiller";
import dayjs from "dayjs";
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import '../stylesheets/calendar/CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import FullCalendar from '@fullcalendar/react'
import formatDate from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
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
          events={[
            { title: 'Meeting 1', date: '2023-02-16' },
            { title: 'Meeting 2', date: '2023-02-18' },
            {googleCalendarId: '7e8c39c3b4e62c0a3b6cbb2f0c8bfc79557b68c837f3170042e72bba11b977ed@group.calendar.google.com'}
          ]}
        />
        </>
      )
    }
  
    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
  
  }