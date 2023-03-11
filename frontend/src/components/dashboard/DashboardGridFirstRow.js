import { Box, Divider } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useAuth0 } from "@auth0/auth0-react";


export default function DashboardGridFirstRow ({ chronotype, setChronotype }) {
    const { logout } = useAuth0();

    // const localUrl = `http://localhost:3301`;
    const url = `https://group3backend-lukfolvarsky.onrender.com`;

    const auth0UserData = JSON.parse(
        window.localStorage.getItem(
            '@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email'))
                .body.decodedToken.user;

    const [allEvents, setAllEvents] = useState([]);
    const [meetings, setMeetings] = useState([]);

    const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      };

      const getAllEvents = async () => {
        try {
            const response = await axios.get(`${url}/gcal/events/list/${auth0UserData.sub}`);
            setAllEvents(response.data);
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 500) {
                handleLogout();
            } else {
                console.log(error);
            }
        }
    };
    
    const getMeetings = async () => {
        try {
            const response = await axios.get(`${url}/gcal/events/meetings/${auth0UserData.sub}`);
            setMeetings(response.data);
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 500) {
                handleLogout();
            } else {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        getAllEvents();
        getMeetings();
    }, []);

    useEffect(() => {
        const getChronoTypeData = async () => {
            const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
            setChronotype(response.data[0].chrono_name);
        };
        getChronoTypeData();
    }, []);
    
    return (
        <>
            <Box 
                gridColumn="span 3" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >
            <div className='BusCalCard'>
                <h2 className='DashboardTitle'>Number of Calendar Events</h2>
                <div className='BusCal'>
                    <div className='BusCal-wrapper'>
                        <p className='BusCal-text'>
                            {allEvents.length} events
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
                <h2 className='DashboardTitle'>Number of Meetings</h2>
                <div className='TotWor'>
                    <div className='TotWor-wrapper'>
                        <p className='TotWor-text'>
                            {meetings.length} meetings
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
            {/* <SelectField 
                optionToSelect={ "Timeframe" }
                options={ ["Today", "This Week", "This Month", "This Year"] }
            /> */}
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
                        <div className='MyChr-text'>
                        {chronotype === "Empty" ? 
                            <div style={{color: "red", fontSize: 20}}>Take the Quiz!</div> : 
                            <div>
                                According to the Chronotype Quiz you are a <strong>{chronotype}</strong> chronotype.
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
            </Box>
        </>
    );
}