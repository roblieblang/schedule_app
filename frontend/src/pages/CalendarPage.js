import React from 'react'
import '../components/calendar/CalendarBoard.css';
import dayjs from "dayjs";
import {useState} from 'react';
import './CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import FullCalendar from '@fullcalendar/react'
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
        />
        </>
      )
    }
  
    handleDateClick = (arg) => { // bind with an arrow function
      alert(arg.dateStr)
    }
  
  }
