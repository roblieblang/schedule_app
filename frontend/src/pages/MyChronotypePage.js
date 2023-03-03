import React from 'react'
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import ChronoSummary from '../components/chronotype/ChronoSummary';
import ChronotypeTimeline from '../components/chronotype/ChronotypeTimeline';
import SurveyButton from '../components/buttons/SurveyButton';
import '../stylesheets/mychronotype/chronotype.css';


const MyChronotypePage = () => {
   
    return (

        <>
        
            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>
                
                <ChronoSummary/>
                <p className='timeline-title'>Ideal Daily Timeline</p>
                <ChronotypeTimeline/>
                <div className ='buttonClass111'><SurveyButton > </SurveyButton></div>
                <br></br>
            </Box>

            

         </>
            

        
    )
}

export default MyChronotypePage;