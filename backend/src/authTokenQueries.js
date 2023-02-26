import * as dotenv from 'dotenv';
dotenv.config();
// const fs = require('fs').promises;
import axios from 'axios';
import express from 'express';
import path from 'path';
import { authenticate } from '@google-cloud/local-auth';
import { google } from "googleapis";


// Auth0 token requests
const tokenReqParamsBody = JSON.stringify({client_id: process.env.AUTH0_CLIENT_ID,client_secret: process.env.AUTH0_CLIENT_SECRET,audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,grant_type:"client_credentials"} )

let tokenReqParams = {
  url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
  headers: { 'content-type': 'application/json' },
  body: tokenReqParamsBody
};
const { data } = await axios.post(tokenReqParams.url, tokenReqParams.body, { headers: tokenReqParams.headers });
const accessToken = data.access_token;
// console.log(data)
// console.log("access token:", accessToken);


let userReqParams = {
  url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${process.env.TEST_USER_ID}`,
  headers: {authorization: `Bearer ${accessToken}`}
};
const user = await axios.get(userReqParams.url, { headers: userReqParams.headers });
const googleIdPAccessToken = user.data.identities[0].access_token;
// console.log("google IdP access token:", googleIdPAccessToken);
console.log(user.data)