import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import createContact from '../../context/actions/contacts/createContact';
import clearCreateContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import CreateContact from '../../layout/Contacts/Create';

const CreateContactContainer = () => {
    
        const [form, setForm] = useState({});
        const [tempFile, setTempFile] = useState(null)
        const { contactsDispatch, 
                contactsState : {
                    addContact: { loading, data, }
                } 
            } = useContext(GlobalContext);

        const history = useHistory();

        
        useEffect(() => {
            if (data) {
              history.push("/");
            }
            return () => {
              clearCreateContact()(contactsDispatch);
            };
          }, [data]);
        
        console.log("addContact loading", loading);

        const onChange = (e, { name, value}) => {
            setForm({...form, [name]: value})
        };

        console.log("form", form)

        const onSubmit = () => {
            createContact(form)(contactsDispatch);
        }

        const formInvalid =
            !form.firstName?.length ||
            !form.lastName?.length ||
            !form.countryCode?.length ||
            !form.phoneNumber?.length;

        const formIsHalfFilled = Object.values(form).filter((item) => item && item !== "")?.length>0 && !data;

        const onImageChange = (e) => {
            e.persist();
            const fileURL = e.target.files[0];
            setForm({...form, contactPicture: fileURL});
            if(fileURL){
                setTempFile(URL.createObjectURL(fileURL));
            }
        }

        return (
            <CreateContact 
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
                formInvalid={formInvalid}
                loading={loading}
                formIsHalfFilled={formIsHalfFilled}
                onImageChange={onImageChange}
                tempFile={tempFile}
                
            />
        )
}

export default CreateContactContainer
