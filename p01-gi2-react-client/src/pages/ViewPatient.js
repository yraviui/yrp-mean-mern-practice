import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPatientById } from '../services/api'

export const ViewPatient = () => {
  const [currendData, setCurrendData] = useState({})
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    getPatientById(id).then(res => {
      console.log(res.data)
      setCurrendData(res.data)
      // window.location.reload()
    }).catch(err => console.log(err))
  }, [id])
  return (
    <div>
      <h1>ViewPatient</h1>
      <p>{currendData.name}</p>
      <p>{currendData.age}</p>
      <p>{currendData.purpose_of_visit}</p>
      <p>{currendData.age}</p>
      <p>{currendData.phone}</p>
      <Link to={'/'}>Back to Patients</Link>
    </div>
  )
}
