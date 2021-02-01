import axios from 'axios'

export default (history = null) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL //backend URL from the .env file

    let headers = {}

    if(localStorage.token){ //if we already have a jwt stored, 
        headers.Authorization = `Bearer ${localStorage.token}` //then use make a string as 'Bearer:xxxx' for the header that is to be passed to the backend 
    }

    const axiosInstance = axios.create({ //info that is to be used frequently
        baseURL: baseURL,
        headers,
    })

    axiosInstance.interceptors.response.use(
        (response) => 
            new Promise((resolve, reject) => {
                resolve(response);
            }),
        (error) => {
            if(!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }

            if(error.response.status===403){
                localStorage.removeItem("token");

                if(history){
                    history.push("/auth/login");
                }else{
                    window.location = "/auth/login";
                }
            }else{
                return new Promise((resolve, reject) => {
                    reject(error);
                })
            }
        }
    )

    return axiosInstance
};