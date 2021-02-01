//custom hook to handle the form
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {register} from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

export default () => {
    const { 
        authDispatch,
        authState: {
            auth: {loading, data, error},
        },
    } = useContext(GlobalContext); //unpacking from context
    
    const [form, setForm] = useState({}); //for registration form
    const [fieldErrors, setFieldErrors] = useState({}); //for error fields
 
    const history = useHistory(); // The useHistory hook gives you access to the history instance that you may use to navigate.

    const onChange = (e, { name, value}) => {
        setForm({...form, [name]:value})
    }; //on change set the form values, as "name:value" pair

    useEffect(() => {
        if(error){//in case there's an  error
            for(const item in error){  //loop over the error array 
                setFieldErrors({...fieldErrors, [item]: error[item][0]}) //set errors in the array
            }
        }
    },[error]); //invoke on any error

    useEffect(() => {
        if(data) { //if data is present, that is if we have successfully submitted the registration form
            history.push("/auth/login") //redirect to this page then
        }
    }, [data]); //invoked when we have data

    const registerFormValid = //passing a var, which is true or false based on if any feild in form is null
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.password?.length ||
    !form.email?.length;

    const onSubmit = () => {
        setFieldErrors({}) //emptying all the errors before the form is submitted
        register(form)(authDispatch) //registering the user, with the help of reducer
    };

    return {form, onChange, registerFormValid, loading, onSubmit, fieldErrors};
}


