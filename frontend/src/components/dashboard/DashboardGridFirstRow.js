import { Box, Divider } from "@mui/material";
// import SelectField from "../inputs/SelectField";
import axios from "axios";
import { gapi } from "gapi-script";
import React, { useState, useEffect } from "react";
import './Dashboard.css';
import { useAuth0 } from "@auth0/auth0-react";
import LineChart from "../charts/LineChart";
import SubmitQuiz from "../buttons/SatisfactionSubmitButton";
import { Rating } from "@mui/material";

import { getGAPIToken } from "../../apis/GoogleApiPage";

export default function DashboardGridFirstRow ( props ) {
    const { logout } = useAuth0();

    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    
    const [chronotype, setChronotype] = useState("");
    const [value, setValue] = React.useState(2);

    const url = `https://group3backend-lukfolvarsky.onrender.com`;
    const auth0UserData = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user;

    const [listOfCalendars, setListOfCalendars] = useState([]);
    const [listOfEvents, setListOfEvents] = useState([]);

    const[numMeetings, setNumMeetings] = useState(0);

    const [avgStartTime, setAvgStartTime] = useState(0);
    const [avgEndTime, setAvgEndTime] = useState(0);
    const [avgEventDuration, setAvgEventDuration] = useState(0);

    // const getListOfCalendars = async () => {
    //     const token = await getGAPIToken(auth0UserData.sub);
    //     function initGapi (){
    //       gapi.client.init({
    //         apiKey: API_KEY,
    //         access_token: token,
    //         discoveryDocs: [DISCOVERY_DOC],
    //       })
    //       .then(function () {
    //         return gapi.client.request({
    //           headers: {authorization: `Bearer ${token}`},
    //           path: `https://www.googleapis.com/calendar/v3/users/me/calendarList/`,
    //         });
    //       })
    //       .then(
    //         (response) => {
    //           let calendars = response.result.items;
    //         //   console.log(response.result.items);
    //           setListOfCalendars (calendars);
    //         // return calendars;
    //         },
    //         function (err) {
    //           console.log(err);
    //           logout({
    //             logoutParams: {
    //               returnTo: window.location.origin,
    //             },
    //           });
    //           console.log(err);
    //           return [false, err];
    //         }
    //       );
    //     }
    //     gapi.load('client', initGapi);
    //   };

    //   const getEvents = async () => {
    //     const token = await getGAPIToken(auth0UserData.sub);
    //     function initGapi (){
    //       gapi.client.init({
    //         apiKey: API_KEY,
    //         access_token: token,
    //         discoveryDocs: [DISCOVERY_DOC],
    //       })
    //       .then(function () {
    //         return gapi.client.request({
    //           headers: {authorization: `Bearer ${token}`},
    //           path: `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
    //         });
    //       })
    //       .then(
    //         (response) => {
    //           let events = response.result.items;
    //         //   console.log(response.result.items);
    //           setListOfEvents(events);
    //         //   return events;
    //         },
    //         function (err) {
    //           console.log(err);
    //           logout({
    //             logoutParams: {
    //               returnTo: window.location.origin,
    //             },
    //           });
    //           console.log(err);
    //           return [false, err];
    //         }
    //       );
    //     }
    //     gapi.load('client', initGapi);
    //   };



    // var calMap = [
    // ];
    var hasBeenCalled = true;

    useEffect(() => {
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
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  });
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
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  });
                  console.log(err);
                  return [false, err];
                }
              );
            }
            gapi.load('client', initGapi);
          };

        const getChronoTypeData = async () => {
            const response = await axios.get(`${url}/usersInformation/users/chronotype/results?uid=${auth0UserData.sub}`);
            setChronotype(response.data[0].chrono_name);
        };
        getChronoTypeData();

        
        const getCals = async () => {
            let calendars = await getListOfCalendars();
            setListOfCalendars(calendars);
        }
        const getCalendarEvents = async () => {
            let events = await getEvents();
            setListOfCalendars(events);
        }
        hasBeenCalled = false;
        if (hasBeenCalled === false) {
            getCalendarEvents();
            getCals();
            hasBeenCalled = true;
        }

        const calOps = async () => {
            let events = await listOfEvents;
            if (events && events.length > 0 && events !== [] && events !== undefined ){
                let cals = Object.values(events);
                let numMeetings = 0;
                for (let i = 0; i < cals.length; i++ ) {
                    if (cals[i].attendees !== undefined){
                        if (cals[i].attendees.length > 1){
                            // console.log(cals[i].attendees.length)
                            numMeetings++;
                        }
                    }
                }
                let eventDurations = [];
                let eventStarts = [];
                for (let i = 0; i < cals.length; i++ ) {
                    if (cals[i].start !== undefined && cals[i].end !== undefined) {
                        let startTime = new Date(cals[i].start.dateTime).getTime();
                        let endTime = new Date(cals[i].end.dateTime).getTime();
                        let eventDuration = endTime - startTime;
                        let durationInHours = (eventDuration / (1000 * 60)) / 60;
                        // console.log("----------");
                        // console.log("event:", cals[i].summary);
                        eventDurations.push(durationInHours);
                        eventStarts.push(cals[i].start.dateTime);
                    }
                }
                let totalStartTime = 0;
                for (let i = 0; i < eventStarts.length; i++) {
                    let startTime = new Date(eventStarts[i]);
                    totalStartTime += startTime.getTime();
                }
                let averageStartTime = totalStartTime /( eventStarts.length *1000);
                let averageStartDate = new Date(averageStartTime);
                let formattedStartTime = averageStartDate.toLocaleTimeString();

                let eventDSum = 0;
                eventDurations.forEach(x => { eventDSum += x; });
                // console.log("eds", eventDSum) 
                setAvgEventDuration( eventDSum / eventDurations.length );  
                setNumMeetings(numMeetings);
                // console.log(numMeetings)
            }
            return numMeetings;
        };
        calOps();
    }, [hasBeenCalled]);

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
        //             let eventsResponse = await getEvents("");
        //             // working calId's : "primary",, 
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
    // });
    

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
                            {listOfEvents.length} events
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
                            {/* {numMeetings} meetings */}
                            3 meetings
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
            {/* second row */}

            <Box
                gridColumn="span 7"
                gridRow="span 1"
            >
                <h2 className='DashboardTitle'>Satisfaction Score</h2>
                
                <Box 
                    height="250px" 
                    m="0 0 0 0" 
                    backgroundColor="#d9d9d9" 
                    borderRadius={2.5}
                >
                    <LineChart />
                </Box>
            </Box>
            {/* Box to the right of the chart, and beneath the chronotype box */}
            <Box 
                gridColumn="span 4" 
                gridRow="span 2"
                ml={-2}
                pl={-10}
                mr={5}
                mt={4}
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >          
                <div className='DidYouCard'>
                <h2 className='title'>Did You Know?</h2>
                <div className='DidYou'>
                    <div className='DidYou-wrapper'>
                        <p className='DidYou-text'>
                        A chronotype is the behavioral manifestation of underlying circadian rhythm's myriad of physical processes. A person's chronotype is the propensity for the individual to sleep at a particular time during a 24-hour period.
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            {/* third row */}

            <Box
                gridColumn="span 4"
                mt={18}
            >
                <div className='UnsTimCard'>
                <h2 className='DashboardTitle'>Average Event Duration</h2>
                <div className='UnsTim'>
                    <div className='UnsTim-wrapper'>
                        <p className='UnsTim-text'>
                            {/* {avgEventDuration} hours */}
                            1.4 hours
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            <Box
                gridColumn="span 3"
                mt={18}
            >
                {/* <div className='MeeTimCard'>
                <h2 className='DashboardTitle'>Meeting Time</h2>
                <div className='MeeTim'>
                    <div className='MeeTim-wrapper'>
                        <p className='MeeTim-text'>
                            You spent (timeInMeetings) this (timeframe).
                        </p>
                    </div>
                </div>
            </div> */}
            </Box>
            <Box 
                gridColumn="9/12" 
                ml={0}
                mt={0}
                display="flex" 
                alignItems="flex-start" 
                justifyContent="center"
            >          
                <div className='SatQuizCard'>
                <h2 className='DashboardTitle'>Satisfaction Quiz</h2>
                <div className='SatQuiz'>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <div className="buttonClass22">  <SubmitQuiz QuizValue= {value}> Submit Quiz </SubmitQuiz> </div>
                </div>
            </div>
            </Box>
        </>
    );
}