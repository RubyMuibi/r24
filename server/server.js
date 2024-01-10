const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const postDB = require('./database/post');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

require('dotenv').config();
const dbURI = process.env.MONG0DB_URI;
const secretKey = process.env.SecretKey;

mongoose.connect(dbURI).then(() => console.log('Connected to MongoDB')).catch(console.error);


app.get('/', (req, res) => {
    try {
        // Your code here
    } catch (error) {
        console.log('Server Error:', error);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:port`);
});