import React from 'react'
import axiosInstance from '../../helpers/axios'

function register() {
    return (
        axiosInstance.post("/auth/register").
        then((res) => console.log("result", res)).
        catch((err) => console.log("error",err))
    )
}

export default register
