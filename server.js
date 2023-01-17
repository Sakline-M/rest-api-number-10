const  express = require('express');
const  dotenv = require('dotenv');
const  colors = require('colors');
const  userRouter  = require('./routes/user');


//init enviroment variable
dotenv.config();
const PORT = process.env.PORT  || 5050; 

//init express
const app = express();

//express middleware
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

//api routes
app.use('/api/v1/user', userRouter);

//routes
app.listen(PORT, () => {
console.log(`this  is for rest api ${PORT}`.bgMagenta);
})