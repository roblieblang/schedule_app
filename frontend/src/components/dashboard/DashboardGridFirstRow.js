import { Box, Divider } from "@mui/material";
import SelectField from "../inputs/SelectField";
import axios from "axios";
import React, { useState, useEffect } from "react";
import './Dashboard.css';

export default function DashboardGridFirstRow () {
    
    const [chronotype, setChronotype] = useState("");

    const url = `http://localhost:3301`;
    const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await axios(
    //         // 'http://localhost:3301/usersInformation/users/chronotype/results?uid=1234abcd',
    //         // `https://group3backend-lukfolvarsky.onrender.com/usersInformation/users/chronotype/results?uid=1234abcd`,
    //       );
    //       setChronotype(result.data[0].chrono_name);
    //     };
    //     fetchData();
    //   }, []);

    useEffect(()=>{
        const getChronoTypeData = async () => {
            const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
            setChronotype(response.data[0].chrono_name);
        };
        getChronoTypeData();
    });

    return (
        <>
            <Box 
                gridColumn="span 3" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
            <div className='BusCalCard'>
                <h2 className='DashboardTitle'>Busiest Calendar</h2>
                <div className='BusCal'>
                    <div className='BusCal-wrapper'>
                        <p className='BusCal-text'>
                            Your busiest calendar was (user calendar with most events).
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            <Box 
                gridColumn="span 3" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
            <div className='TotWorCard'>
                <h2 className='DashboardTitle'>Total Work Time</h2>
                <div className='TotWor'>
                    <div className='TotWor-wrapper'>
                        <p className='TotWor-text'>
                            You spent (workTime) (units) working (timeframe)
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            <Box 
                gridColumn="span 1" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
            <SelectField 
                optionToSelect={ "Timeframe" }
                options={ ["Today", "This Week", "This Month", "This Year"] }
            />
            </Box>
            <Box 
                gridColumn="span 1" 
                gridRow="span 4"
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
                <Divider 
                orientation="vertical" 
                flexItem 
                sx={{ 
                    borderRightWidth: 7, 
                    mr: 1,
                    color: 'black' }}
                />
            </Box>
            <Box 
                gridColumn="span 3" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                ml={-2}
            >
            <div className='MyChrCard'>
                <h2 className='DashboardTitle'>My Chronotype</h2>
                <div className='MyChr'>
                    <div className='MyChr-wrapper'>
                        <p className='MyChr-text'>
                        {chronotype === "Empty" ? 
                            <p style={{color: "red", fontSize: 20}}>Take the Quiz!</p> : 
                            <p>
                                According to the Chronotype Quiz you last took on (dd/mm/yyyy) you are a <strong>{chronotype}</strong> chronotype.
                            </p>
                        }
                        </p>
                    </div>
                </div>
            </div>
            </Box>
        </>
    );
}