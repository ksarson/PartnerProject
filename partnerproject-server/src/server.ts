import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import apiRouter from '../routes/index';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = 3000;

// Use the API router
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

const uri = 'mongodb://localhost:27017/User';

mongoose
    .connect(uri)
    .then(() => {
        console.log('MongoDB connected!');
    })
    .catch((err) => {
        console.log(`MongoDB connection error: ${err}`);
    });
