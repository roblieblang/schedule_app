const express = require ('express');
const bodyParser = require('body-parser');
const chronoUsers =require('./routes/usersInformation.js');
const googleAccessToken = require("./routes/googleAccessToken.js")
const cors = require("cors") ;
// import { getGoogleAccessToken } from './authTokenQueries.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

//browser route:  http://localhost:3301/usersInformation/users/chronotype/results?uid=1234abcd
app.use('/usersInformation', chronoUsers);
//browser route: http://localhost:3301/googleAccessToken/gapi-token/google-oauth2|100856536102932572455
app.use('/googleAccessToken', googleAccessToken);

// define a route, get request

/*
- once a user logs in on the front end, grab the user_id:
  /// 
    user_id = JSON.parse(window.localStorage.getItem('@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email')).body.decodedToken.user.sub;
  ///
- grab the user's google access token by passing user_id to backend function

- use the google access token to call the google api and list the calendar events
 
 */

app.listen(3301, () => {
  console.log('Server is now listening at port 3301');
});