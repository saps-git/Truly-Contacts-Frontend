import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL //backend URL from the .env file
console.log("baseURL", baseURL)

let headers = {}

if(localStorage.token){ //if we already have a jwt stored, 
    headers.Authorization = `Bearer ${localStorage.token}` //then use make a string as 'Bearer:xxxx' for the header that is to be passed to the backend 
}

const axiosInstance = axios.create({ //info that is to be used frequently
    baseURL: baseURL,
    headers,
})

export default axiosInstance