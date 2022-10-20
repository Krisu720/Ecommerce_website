import axios from 'axios'

const BASE_URL = "http://localhost:3001/api/"
const USER_TOKEN = "Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGFiYjA0MDI0ZjZmYzE1ZjZkMGZmNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjYyOTU5NjgsImV4cCI6MTY2NjU1NTE2OH0.q2ZFv9CCEFe7RvEXEReRUU3XlXC3oGLS917BkT32ugM"
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGFiYTllMDI0ZjZmYzE1ZjZkMGZmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI5NTk4OCwiZXhwIjoxNjY2NTU1MTg4fQ.M5x1R_91Ep5aeXjVnhGBDFhbJa6ygcExW2oKM7MA_Z4

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: USER_TOKEN}
})

