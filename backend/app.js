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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
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
app.get('/api/myBarn', (req, res, next) => {
    Horse.find()
        .then(horses => {
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
app.get('/api/myBarn/:id', (req, res) => {
    const horseId = req.params.id;
    Horse.findById(horseId)
        .then(horse => {
            if (!horse) {
                return res.status(404).json({ message: 'Horse not found' });
            }
            res.status(200).json({ message: 'Horse found', horse });
        })
        .catch(err => {
            res.status(500).json({ message: 'Error fetching horse', error: err });
        });
});
// Route to create a new horse
app.post('/api/myBarn', async (req, res, next) => {
    try {
        // Create a new Horse instance
        const horse = new Horse({
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

app.put('/api/myBarn/:id', async (req, res, next) => {
    try {
        const horseId = req.params.id;

        // Find the horse by ID and update it
        const updatedHorse = await Horse.findByIdAndUpdate(
            horseId,
            {
                name: req.body.name,
                height: req.body.height,
                age: req.body.age,
                weight: req.body.weight,
                breed: req.body.breed,
                color: req.body.color,
                gender: req.body.gender,
                imageUrl: req.body.imageUrl
            },
            { new: true } // Return the updated document
        );

        if (!updatedHorse) {
            return res.status(404).json({ message: 'Horse not found' });
        }

        // Respond with the updated horse
        res.status(200).json({
            message: 'Horse updated successfully!',
            horse: updatedHorse
        });
    } catch (error) {
        console.error('Error updating horse:', error);
        res.status(500).json({
            message: 'Failed to update horse',
            error: error.message
        });
    }
});

app.delete('/api/myBarn/:id', async (req, res, next) => {
    try {
        const horseId = req.params.id;

        // Find and delete the horse by ID
        const deletedHorse = await Horse.findByIdAndDelete(horseId);

        if (!deletedHorse) {
            return res.status(404).json({ message: 'Horse not found' });
        }

        // Respond with success message
        res.status(200).json({
            message: 'Horse deleted successfully!'
        });
    } catch (error) {
        console.error('Error deleting horse:', error);
        res.status(500).json({
            message: 'Failed to delete horse',
            error: error.message
        });
    }
});



// Export the app
module.exports = app;
