import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header as SemanticHeader, Segment } from "semantic-ui-react";
import Header from "../../components/header";

const RegisterUI = ({ form:  {form, onChange, registerFormValid, onSubmit, loading, fieldErrors} }) => { //form and onChange are destructured
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
            <SemanticHeader>Sign Up</SemanticHeader>
            <Segment>
                <Form>
                    <Form.Field>
                        <Form.Input
                            value={form.username || ""}
                            onChange={onChange}
                            name="username"
                            label = "Username"
                            placeholder="Username"
                            error={fieldErrors.username && { //if there's a username error, in the fieldErrors state
                                content: fieldErrors.username, //show it on the page
                                positioning: "below" //below 
                            }}
                        />
                    </Form.Field>
                    <Form.Field> 
                        <Form.Input
                            value={form.firstName || ""}
                            name="firstName"
                            label = "First Name"
                            placeholder="First Name"
                            onChange={onChange}
                            error={fieldErrors.first_name && {
                                content: fieldErrors.first_name,
                                positioning: "below"
                            }}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            value={form.lastName || ""}
                            name="lastName"
                            label = "Last Name"
                            placeholder="Last Name"
                            onChange={onChange}
                            error={fieldErrors.last_name && {
                                content: fieldErrors.last_name,
                                positioning: "below"
                            }}
                        />
                    </Form.Field>
                        <Form.Input
                            value={form.email || ""}
                            name="email"
                            label = "Email"
                            placeholder="Email"
                            onChange={onChange}
                            error={fieldErrors.email && {
                                content: fieldErrors.email,
                                positioning: "below"
                            }}
                        />
                    <Form.Field>
                        <Form.Input
                            value={form.password || ""}
                            name="password"
                            label = "Password"
                            placeholder="Password"
                            onChange={onChange}
                            error={fieldErrors.password && {
                                content: fieldErrors.password,
                                positioning: "below"
                            }}
                        />
                    </Form.Field>
                    <Button 
                        onClick={onSubmit} 
                        disabled = {registerFormValid || loading} 
                        fluid //fluid stretches the button
                        loading = {loading}
                        primary 
                        type="submit"
                    >Submit</Button> 
                    <Segment>Already have an account ? <Link to="/auth/login"> Login</Link></Segment>
                </Form>
            </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default RegisterUI;
