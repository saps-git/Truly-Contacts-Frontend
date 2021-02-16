import React, { useRef } from 'react'
import { Grid, Form, Header as SemanticHeader, Card, Button, Select, Icon, Image } from 'semantic-ui-react'
import Header from "../../../components/header"
import "./index.css"
import countries from '../../../utils/countries'
import { Prompt } from 'react-router-dom'

const CreateContact = ({onChange, onSubmit, formInvalid, loading, formIsHalfFilled, onImageChange, tempFile}) => {

    const imagePickRef = useRef(null);

    const chooseImage = () => {
        if(imagePickRef.current){
            imagePickRef.current.click();
        }
    }

    return (
        <div>
            <Prompt
                when={formIsHalfFilled}
                message={JSON.stringify({
                header: "Confirm",
                content: "You have unsaved changes, Are you sure you want to leave?",
                })}
            />
            <Header />
            <Grid centered>
                <Grid.Column className="form-column">
                    <SemanticHeader>Create Contact</SemanticHeader>
                    <Card fluid>
                        <Card.Content>
                            <Form unstackable>
                                <input 
                                     onChange={onImageChange}
                                     ref={imagePickRef}
                                     type="file"
                                     //accept="image/*"
                                     hidden
                                />
                                <div className="image-wrapper">
                                    {tempFile && (
                                        <Image className="contactpicture" src={tempFile}/>
                                    )}
                                    {!tempFile && (
                                        <div onClick={chooseImage} className="contactpicture">
                                            <span>Choose picture</span>
                                        </div>
                                    )}
                                    <Icon name="pencil" onClick={chooseImage} />
                                </div>

                                <Form.Group widths={2}>
                                    <Form.Input
                                        label='First name'
                                        name='firstName'
                                        onChange={onChange}
                                        placeholder='First name'
                                    />
                                    <Form.Input
                                        label='Last name'
                                        name='lastName'
                                        onChange={onChange}
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input
                                        label='Country'
                                        name='countryCode'
                                        onChange={onChange}
                                        control={Select}
                                        options={countries}
                                        placeholder='Country'
                                    />
                                    <Form.Input
                                        label='Phone Number'
                                        name='phoneNumber'
                                        onChange={onChange}
                                        placeholder='Phone Number'
                                    />
                                </Form.Group>
                                <Form.Checkbox 
                                    name="isFavorite"
                                    onChange={(e, data) => {
                                        onChange(e, { name:'isFavorite', value:data.checked})
                                    }}
                                    label="Add to favorite"
                                />
                                <Button 
                                    disabled={formInvalid || loading}
                                    type='submit'
                                    primary
                                    onClick={onSubmit}
                                    loading={loading}
                                >Submit</Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CreateContact
