// const cors = require("cors");
// const dotenv = require("dotenv");
// const express = require("express");
// const helmet = require("helmet");
// const nocache = require("nocache");
// const { messagesRouter } = require("./messages/messages.router");
// const { errorHandler } = require("./middleware/error.middleware");
// const { notFoundHandler } = require("./middleware/not-found.middleware");

// dotenv.config();

// if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
//   throw new Error(
//     "Missing required environment variables."
//   );
// }

// // const PORT = parseInt(process.env.PORT, 10);
// const PORT = process.env.PORT;
// const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

// const app = express();
// const apiRouter = express.Router();

// app.use(express.json());
// app.set("json spaces", 2);

// app.use(
//   helmet({
//     hsts: {
//       maxAge: 31536000,
//     },
//     contentSecurityPolicy: {
//       useDefaults: false,
//       directives: {
//         "default-src": ["'none'"],
//         "frame-ancestors": ["'none'"],
//       },
//     },
//     frameguard: {
//       action: "deny",
//     },
//   })
// );

// app.use((req, res, next) => {
//   res.contentType("application/json; charset=utf-8");
//   next();
// });
// app.use(nocache());

// app.use(
//   cors({
//     origin: CLIENT_ORIGIN_URL,
//     methods: ["GET"],
//     allowedHeaders: ["Authorization", "Content-Type"],
//     maxAge: 86400,
//   })
// );

// app.use("/api", apiRouter);
// apiRouter.use("/messages", messagesRouter);

// app.use(errorHandler);
// app.use(notFoundHandler);

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

import * as dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import express from 'express';


const tokenReqParamsBody = JSON.stringify({client_id: process.env.AUTH0_CLIENT_ID,client_secret: process.env.AUTH0_CLIENT_SECRET,audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,grant_type:"client_credentials"} )

let tokenReqParams = {
  url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
  headers: { 'content-type': 'application/json' },
  body: tokenReqParamsBody
};
const { data } = await axios.post(tokenReqParams.url, tokenReqParams.body, { headers: tokenReqParams.headers });
const accessToken = data.access_token;
// console.log(accessToken);


let userReqParams = {
  url: `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${process.env.TEST_USER_ID}`,
  headers: {authorization: `Bearer ${accessToken}`}
};
const user = await axios.get(userReqParams.url, { headers: userReqParams.headers });
const googleIdPAccessToken = user.data.identities[0].access_token;
// console.log(googleIdPAccessToken);




