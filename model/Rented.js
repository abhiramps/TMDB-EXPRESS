const mongoose = require('mongoose');

const RentedSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserData' },
    id: {
        type: Number,
        unique: true
    },
    original_title: {
        type: String,
        required: true
    },
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    release_date: {
        type: String
    },
    Status: {
        type: String
    },
    title: {
        type: String
    },
    vote_average: {
        type: Number
    },
    rentTime: {
        type: String
    }
})

module.exports = mongoose.model('Rented', RentedSchema);