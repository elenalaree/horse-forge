const mongoose = require('mongoose');

// Define the schema for a Horse
const horseSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

// Create and export the model
module.exports = mongoose.model('Horse', horseSchema);
