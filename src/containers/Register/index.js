import React, { useEffect } from "react";
import RegisterUI from '../../layout/Register'
import useForm from './useForm'

function RegisterContainer() {
    return (
        <RegisterUI form={useForm()}/>
    )
}

export default RegisterContainer;
