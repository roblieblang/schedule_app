import React from 'react'
import CalendarBoard from '../components/calendar/CalendarBoard';
import CalendarFiller from "../components/calendar/CalendarFiller";
import '../components/calendar/CalendarBoard.css';
import dayjs from "dayjs";
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './CalendarPage.css';
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>
                <div className='app'>
                    <h1>This is the Calendar Page</h1>
                    <h1 classname='header'>React Calendar</h1>
                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date}/>
                    </div>
                    <div className='text-center'>
                        Selected date: {date.toDateString()}
                    </div>
                </div>
            </Box>
        </>
    )
}

export default CalendarPage;