const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('./connection.js')

const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: '*',
  methods: "*"
})


const User = require('./models/User')
const userRoutes = require('./routes/userRoutes')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/users', userRoutes)



app.listen(5000, () => {
    console.log("Port Running on port", 5000 );
})