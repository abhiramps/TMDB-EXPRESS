const mongooese = require('mongoose');

const Purchaised = require('./Purchaised');
const Rented = require('./Rented');

var UserData = mongooese.model('UserData', {
    username: String,
    email: String,
    password: String,
    gender: String,
    purchaisedItems: Array,
    rentedItems: Array,
})


// var Purchaised = mongooese.model('Purchaised', {
//     items: Array,

// })

// var Rented = mongooese.model('Rented', {
//     rentedItems: Array
// })


module.exports = UserData;