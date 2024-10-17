import React, { useEffect, useState } from 'react'
import { getPatients } from './../services/api'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Patients = () => {
  const [patiensData, setPatientsData] = useState([])
  useEffect(() => {
    getPatients().then(result => setPatientsData(result.data)).catch(err => console.log(err))
  }, [])
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/patients/${id}`).then(res => {
      console.log(res)
      window.location.reload()
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Purpose of visit</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Del</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <>
          {patiensData.map( (o, i) => {
            return <tr key={i}>
              <td>{o.name}</td>
              <td>{o.age}</td>
              <td>{o.purpose_of_visit}</td>
              <td>{o.email}</td>
              <td>{o.phone}</td>
              <td><button onClick={(e) => handleDelete(o._id)}>Del</button></td>
              <td><Link to={`/view/${o._id}`}>View</Link></td>
          </tr>
          })}
          </>
        </tbody>
      </table>
      <Link to={'/add'}>Add Patients</Link>
    </div>
  )
}
