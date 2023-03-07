import { Box, Divider } from "@mui/material";
// import SelectField from "../inputs/SelectField";
import axios from "axios";
import { gapi } from "gapi-script";
import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useAuth0 } from "@auth0/auth0-react";

import { getGAPIToken } from "../../apis/GoogleApiPage";

export default function DashboardGridFirstRow ( props ) {
    const { logout } = useAuth0();

    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    
    const [chronotype, setChronotype] = useState("");

    const url = `http://localhost:3301`;
    const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

    const [listOfCalendars, setListOfCalendars] = useState([]);

    const [listOfEvents, setListOfEvents] = useState([]);

    const getListOfCalendars = async () => {
        const token = await getGAPIToken(auth0UserData.sub);
        function initGapi (){
          gapi.client.init({
            apiKey: API_KEY,
            access_token: token,
            discoveryDocs: [DISCOVERY_DOC],
          })
          .then(function () {
            return gapi.client.request({
              headers: {authorization: `Bearer ${token}`},
              path: `https://www.googleapis.com/calendar/v3/users/me/calendarList/`,
            });
          })
          .then(
            (response) => {
              let calendars = response.result.items;
            //   console.log(response.result.items);
              setListOfCalendars (calendars);
            // return calendars;
            },
            function (err) {
              console.log(err);
            //   logout({
            //     logoutParams: {
            //       returnTo: window.location.origin,
            //     },
            //   });
              console.log(err);
              return [false, err];
            }
          );
        }
        gapi.load('client', initGapi);
      };

      const getEvents = async () => {
        const token = await getGAPIToken(auth0UserData.sub);
        function initGapi (){
          gapi.client.init({
            apiKey: API_KEY,
            access_token: token,
            discoveryDocs: [DISCOVERY_DOC],
          })
          .then(function () {
            return gapi.client.request({
              headers: {authorization: `Bearer ${token}`},
              path: `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
            });
          })
          .then(
            (response) => {
              let events = response.result.items;
            //   console.log(response.result.items);
              setListOfEvents(events);
            //   return events;
            },
            function (err) {
              console.log(err);
            //   logout({
            //     logoutParams: {
            //       returnTo: window.location.origin,
            //     },
            //   });
              console.log(err);
              return [false, err];
            }
          );
        }
        gapi.load('client', initGapi);
      };



    var calMap = [
    ];
    let hasBeenCalled = false;

    useEffect(() => {
        const getChronoTypeData = async () => {
            const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
            setChronotype(response.data[0].chrono_name);
        };
        getChronoTypeData();

        const getCals = async () => {
            let calendars = await getListOfCalendars();
            setListOfCalendars(calendars);
        }
        getCals();

        const getCalendarEvents = async () => {
            let events = await getEvents();
            setListOfCalendars(events);
        }
        getCalendarEvents();


        // if (!hasBeenCalled && listOfCalendars 
        //     && listOfCalendars !== [] 
        //     && listOfCalendars !== undefined 
        //     && listOfCalendars.length > 0) {
        //     hasBeenCalled = true;
        //     let cals = Object.values(listOfCalendars);
        //     for (let i = 0; i < cals.length; i++ ) {
        //         // console.log(cals[i])
        //         let calendarId = cals[i].id;
        //         let title = cals[i].summary;
        //         let events = [];
        //         let size = events.length;
        //         calMap.push({ "calendarId": calendarId, "title": title, "events": events, "size": size });
        //     };
            // console.log(calMap);
        //     const addEventsToMap = async () => {
        //         for (let i = 0; i < calMap.length; i++) {
        //             let calId = calMap[i].calendarId;
        //             let eventsResponse = await getEvents("7e8c39c3b4e62c0a3b6cbb2f0c8bfc79557b68c837f3170042e72bba11b977ed@group.calendar.google.com");
        //             // working calId's : "primary", "robertlieblang@gmail.com", 
        //             setListOfEvents(eventsResponse);
        //             console.log(eventsResponse)
        //             if (listOfEvents 
        //                 && listOfEvents !== [] 
        //                 && listOfEvents !== undefined 
        //                 && listOfEvents.length > 0) {
        //                 calMap[i].events = listOfEvents;
        //             }
        //         }
        //     };
        //     addEventsToMap();
        //     console.log(calMap);
        // }
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
                            {listOfEvents.length} Events
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