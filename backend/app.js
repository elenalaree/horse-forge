const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Horse = require('./models/horse');
const Breed = require('./models/breed');
require('dotenv').config();
const app = express();
const dbURI = process.env.DB_URI
// Connect to MongoDB without deprecated options
mongoose.connect(dbURI)
.then(() => console.log('Connected to Database!'))
.catch(err => console.error('Connection Failed:', err));

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

// Route to get breeds
app.get('/api/breeds', (req, res, next) => {
    Breed.find()
        .then(breeds => {
            res.status(200).json({
                message: "Breeds Successfully fetched.",
                breeds: breeds
            });
        })
        .catch(err => {
            console.error('Error fetching breeds:', err);
            res.status(500).json({ message: 'Failed to fetch breeds' });
        });
});

// Route to get horses
app.get('/api/horses', (req, res, next) => {
    Horse.find()
        .then(horses => {
            console.log(horses)
            res.status(200).json({
                message: "horses Successfully fetched.",
                horses: horses
            });
            
        })
        .catch(err => {
            console.error('Error fetching horses:', err);
            res.status(500).json({ message: 'Failed to fetch horses' });
        });
        
});

// Route to create a new horse
app.post('/api/horses', async (req, res, next) => {
    try {
        // Create a new Horse instance
        const horse = new Horse({
            id: req.body.id,
            name: req.body.name,
            height: req.body.height,
            age: req.body.age,
            weight: req.body.weight,
            breed: req.body.breed,
            color: req.body.color,
            gender: req.body.gender,
            imageUrl: req.body.imageUrl
        });

        // Save the horse to the database
        const result = await horse.save();
        console.log(result);

        // Respond with success message
        res.status(201).json({
            message: 'Horse added successfully!',
            horse: result
        });
    } catch (error) {
        console.error('Error adding horse:', error);
        res.status(500).json({
            message: 'Failed to add horse',
            error: error.message
        });
    }
});

// Export the app
module.exports = app;
