import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Header as SemanticHeader, Segment, Message } from "semantic-ui-react";
import Header from "../../components/header";

const LoginUI = ({ form:  {form, onChange, loginFormValid, onSubmit, loading, error} }) => { //form and onChange are destructured
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
            <SemanticHeader>Log In</SemanticHeader>
            <Segment>
                <Form>
                    {error && <Message content = {error?error.detail:"could not connect"} negative/>}
                    <Form.Field>
                        <Form.Input
                            value={form.username || ""}
                            onChange={onChange}
                            name="username"
                            label = "Username"
                            placeholder="Username"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            value={form.password || ""}
                            name="password"
                            label = "Password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </Form.Field>
                    <Button 
                        onClick={onSubmit} 
                        disabled = {loginFormValid || loading} 
                        fluid //fluid stretches the button
                        loading = {loading}
                        primary 
                        type="submit"
                    >Submit</Button> 
                    <Segment>Don't have an account ? <Link to="/auth/register"> Register</Link></Segment>
                </Form>
            </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default LoginUI;
