import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import createContact from '../../context/actions/contacts/createContact';
import clearCreateContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import CreateContact from '../../layout/Contacts/Create';

const CreateContactContainer = () => {
    
    const [form, setForm] = useState({});
    const [tempFile, setTempFile] = useState(null);
    const history = useHistory();

    const { 
        contactsDispatch, 
        contactsState : {
            addContact: { loading, data, }
        } 
    } = useContext(GlobalContext);

    const onImageChange = (e) => {
        e.persist();
        const fileURL = e.target.files[0]; //take the first obj from the input array (i.e image)
        setForm({...form, contactPicture: fileURL}); //set it in the form 
        if(fileURL){
            setTempFile(URL.createObjectURL(fileURL)); //creating a URL from the object
        }
    };
     
    useEffect(() => {
        if (data) { //once data array is filled (form submitted)
            history.push("/"); //go to home page
        }
        return () => { //clean up function
            clearCreateContact()(contactsDispatch); //clear the data array
        };
    }, [data]); //on change in the data array of contacts

    const formIsHalfFilled = Object.values(form).filter((item) => item && item !== "")?.length>0 && !data;

    const onChange = (e, { name, value}) => {
        setForm({...form, [name]: value}) //onChange of any value, in the form set it as the name: value pair
    };

    const onSubmit = () => {
        createContact(form)(contactsDispatch); //sending dispatch on the submission
    }

    const formInvalid =
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.countryCode?.length ||
        !form.phoneNumber?.length;

    return (
        <CreateContact 
            onSubmit={onSubmit}
            formInvalid={formInvalid}
            onChange={onChange}
            form={form}
            formIsHalfFilled={formIsHalfFilled}
            loading={loading}
            onImageChange={onImageChange}
            tempFile={tempFile}
        />
    )
}

export default CreateContactContainer;
