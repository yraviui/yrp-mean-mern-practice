const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const PatientModel = require('./models/patients.model')

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.get('/', (req, res) => {
    res.json({ msg: "Sample API response" })
})


app.post('/api/patients', (req, res) => {
    PatientModel.create(req.body).then(patient => res.json(patient)).catch(err => res.json(err))
})

app.get('/api/patients', (req, res) => {
    PatientModel.find({}).then(patients => res.json(patients)).catch(err => res.json(err))
})

app.get('/api/patients/:id', (req, res) => {
    const id = req.params.id
    PatientModel.findById({ _id: id }).then(patients => res.json(patients)).catch(err => res.json(err))
})
app.put('/api/patients/:id', (req, res) => {
    const id = req.params.id
    const obj = { name: req.body.name, age: req.body.age, purpose_of_visit: req.body.purpose_of_visit, email: req.body.email, phone: req.body.phone }
    PatientModel.findByIdAndUpdate({ _id: id }, obj).then(patient => res.json(patient)).catch(err => res.json(err))
})

app.delete('/api/patients/:id', (req, res) => {
    const id = req.params.id
    PatientModel.findByIdAndDelete({ _id: id }).then(patient => res.json(patient)).catch(err => res.json(err))
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`))