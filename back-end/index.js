const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const DBConnection = require('./Config/Connect')
const path = require("path");

const app = express()
dotenv.config()

//////connection of DB/////////
DBConnection()

const PORT = process.env.PORT 


//////middleware/////////
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


///ROUTES///
app.use('/api/admin', require('./Routers/adminRoutes'))
app.use('/api/user', require('./Routers/userRoutes'))



app.listen(PORT, () => console.log(`running on ${PORT}`))