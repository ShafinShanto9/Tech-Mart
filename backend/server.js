const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('./connection.js')

const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: '*',
  methods: "*"
})


const User = require('./models/User')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const imagesRoute = require('./routes/imagesRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/orders', ordersRoute )
app.use('/images', imagesRoute)

app.post('/create-payment', async(req, res)=> {
  const {amount} = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card']
    });
    res.status(200).json(paymentIntent)
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
   }
})

app.listen(5000, () => {
    console.log("Port Running on port", 5000 );
})