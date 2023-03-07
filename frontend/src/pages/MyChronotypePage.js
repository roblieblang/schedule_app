import React, {useEffect, useState} from 'react';
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import ChronoSummary from '../components/chronotype/ChronoSummary';
import SurveyButton from '../components/buttons/SurveyButton';
import '../stylesheets/mychronotype/chronotype.css';
import ChronotypeTimeline from './../components/chronotype/ChronotypeTimeline';
import MissingChronoMessage from '../components/chronotype/MissingChronoMessage';
import axios from "axios";

const MyChronotypePage = () => {
    const [userChronotype, setUserChronotype] = useState("");

    const url = `https://group3backend-lukfolvarsky.onrender.com`; 
    const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

    const getChronoType = async () => {
        const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
        // console.log(response[0])
        setUserChronotype(response.data[0]);
    }

    useEffect(() => {
        const userChronotype = getChronoType();
        setUserChronotype(userChronotype);
    }, []);
    console.log(userChronotype.chrono_name)
    if (userChronotype.chrono_name === 'Empty') {
        return (
            <>
                <NavBar />
                <Box sx={{ml: 32, mt: -5, mr: 10}}>
                    <div className ='buttonClass111'> <SurveyButton type='button'> </SurveyButton></div> 
                    <MissingChronoMessage/>
                </Box>
            </>
        );     
    }
    else {
    return (
            <>
                <NavBar />
                <Box sx={{ml: 32, mt: -5, mr: 10}}>
                <div className ='buttonClass111'> <SurveyButton type='button'> </SurveyButton></div> 
                <br></br>
                    <ChronoSummary/>
                    <p className='timeline-title'>Ideal Daily Timeline</p>
                    <ChronotypeTimeline/>
                </Box>
            </>
        );
    }
};

export default MyChronotypePage;


