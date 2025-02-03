const express = require("express");
const app = express();
const db = require("./db.js");
const jobsRoute = require("./routes/jobsRoute.js");
const userRoute=require('./routes/usersRoute.js')
const mongoose = require('mongoose');

app.use(express.json());
app.use("/api/jobs/", jobsRoute);
app.use("/api/users/" , userRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {

  console.log(`server is running on ${port}`);
});
