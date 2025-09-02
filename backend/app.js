const express=require('express');
const app= express();
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const connectToDb=require('./db/db');


// Connect to MongoDB
connectToDb();
//On production level we will specify domains from which requests are allowed and all others are blocked
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Hello World');
});

module.exports=app;