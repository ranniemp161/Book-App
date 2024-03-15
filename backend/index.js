import express from "express";
import { PORT,mongoDBURL, } from "./config.js"
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express()

//middleware for parsing request body
app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: ' http://localhost:5173/',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowHeaders: ['Content-Type']

// }))


app.get('/',(req, res)=>{
    console.log(req)
    return res.status(200).send('WELCOME TO MERN STACK')

})

app.use('/books', booksRoute);



mongoose
.connect(mongoDBURL)
.then(()=>{
    
    console.log('App is connected to database');

    app.listen(PORT, ()=>{

        console.log(`App is listening to port:${PORT}`)
    });
    



})
.catch((error)=>{
    console.log(error)
})