import React from 'react'
import CalendarBoard from '../components/calendar/CalendarBoard';
import CalendarFiller from "../components/calendar/CalendarFiller";
import dayjs from "dayjs";
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import FullCalendar from '@fullcalendar/react'
import formatDate from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default class DemoApp extends React.Component {

    render() {
      return (
        <>
        <NavBar />
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          dateClick={this.handleDateClick}
          events={[
            { title: 'Meeting 1', date: '2023-02-16' },
            { title: 'Meeting 2', date: '2023-02-18' }
          ]}
        />
        </>
      )
    }
  
    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
  
  }