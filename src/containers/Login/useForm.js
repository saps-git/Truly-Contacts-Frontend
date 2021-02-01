//custom hook to handle the form
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {login} from '../../context/actions/auth/login';
import { GlobalContext } from '../../context/Provider';

export default () => {

    const [form, setForm] = useState({}); //for registration form
 
    const history = useHistory(); // The useHistory hook gives you access to the history instance that you may use to navigate.

    const { 
        authDispatch,
        authState: {
            auth: {loading, data, error},
        },
    } = useContext(GlobalContext); //unpacking from context

    const onChange = (e, { name, value}) => {
        setForm({...form, [name]:value})
    }; //on change set the form values, as "name:value" pair

    const loginFormValid = //passing a var, which is true or false based on if any feild in form is null
    !form.username?.length ||
    !form.password?.length;

    useEffect(() => {
        if(data) { //if data is present, that is if we have successfully submitted the registration form
            if(data.user){
                history.push("/") //redirect to this page then
            }
        }
    }, [data]); //invoked when we have data

    const onSubmit = () => {
        login(form)(authDispatch) //registering the user, with the help of reducer
    };

    return {form, onChange, loginFormValid, loading, onSubmit, error };
}


