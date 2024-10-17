import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddPatients = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [purpose_of_visit, setPurpose_of_visit] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    const obj = { name, age, purpose_of_visit, email, phone }
    axios.post('http://localhost:5000/api/patients', obj).then(result => {
      console.log(result)
      navigate('/')
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={submit}>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' /><br />
        <input type='number' onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' /><br />
        <input type='text' onChange={(e) => setPurpose_of_visit(e.target.value)} placeholder='Enter Purpose Of Visit' /><br />
        <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' /><br />
        <input type='number' onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone' /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
