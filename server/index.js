import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookies from 'cookie-parser';


dotenv.config();
//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const app=express();

app.use(express.json());
app.use(cookies());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT=5000;

app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}!`));

Connection();
