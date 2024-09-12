const express = require('express')
const app = express()
require('dotenv').config()


const port = process.env.PORT||300




const bodyParser = require('body-parser');
const cookiesParser=require('cookie-parser')
const cors = require('cors');
const requestLogger=require('./Utilities/requstLogger')
const errorLogger=require('./Utilities/errorLogger')
const userRoutes=require('./Routes/userRoutes')
const hotelsRoutes=require('./Routes/hotelsRoute')
const auth=require('./Middelware/auth')
app.use(bodyParser.json())
app.use(cookiesParser())
app.use(cors());
app.use(requestLogger)
app.use('/',userRoutes)
app.use('/',auth.restrictToLoggedinUserOnly,hotelsRoutes)
app.use(errorLogger)
app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})