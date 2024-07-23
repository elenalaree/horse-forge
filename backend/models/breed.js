const mongoose = require('mongoose');

// Define the schema for a horse breed
const breedSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    average_age: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    colorings: {
        type: String,
        required: true
    },
    interesting_fact: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});

// Create and export the model
module.exports = mongoose.model('Breed', breedSchema);
