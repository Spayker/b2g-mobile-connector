import axios from 'axios'
import globals from '../globals'

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  timeout: 10000,
});

export default APIKit