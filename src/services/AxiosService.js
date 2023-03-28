import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const sandboxGiftsApi = new Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts/',
  timeout: 5000
})

export const Giphy = new Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 5000,
  params: { api_key: 'CeS7sGH0mA3Gu9jqMFif2yXFu0rKFt3J' }
})
