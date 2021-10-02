const mongoose = require('mongoose');
const UserData = require('./UserData');

// var Schema=mongoose.Schema;

const PurchaisedSchema = new mongoose.Schema({
    userId: {
        type: Number,
        ref: 'UserData'
    },
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
    },
})

module.exports = mongoose.model('Purchaised', PurchaisedSchema);