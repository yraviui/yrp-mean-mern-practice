import axios from 'axios'
const base_URL = 'http://localhost:5000/api/patients'
export const getPatients = () => axios.get(base_URL)
export const getPatientById = (id) => axios.get(base_URL+ '/' + id)