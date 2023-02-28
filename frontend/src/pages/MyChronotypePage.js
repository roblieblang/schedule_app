import React from 'react'
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import ChronoSummary from '../components/chronotype/ChronoSummary';
import ChronotypeTimeline from '../components/chronotype/ChronotypeTimeline';
import '../stylesheets/mychronotype/MyChronotypePage.css';

const MyChronotypePage = () => {
   
    return (
        <>
            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>
                <ChronoSummary/>
                <p className='timeline-title'>Ideal Daily Timeline</p>
                <ChronotypeTimeline/>
            </Box>
        </>
    )
}

export default MyChronotypePage;