const mongoose = require('mongoose')

const PatientSechma = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    purpose_of_visit: {type: String},
    email: {type: String},
    phone: {type: Number}
})

const PatientModel = mongoose.model('patients', PatientSechma)
module.exports = PatientModel