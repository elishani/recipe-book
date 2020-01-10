import React, { Component } from 'react';
import './LoginPage.css'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render(){
        return(
            <div>
                <h1>Login Page</h1>
            <div className="p-login">
                <div className="p-main">
                    <h1>Login to Recipe Book</h1>
                    <p>or <Link to="/signup">Create a new account</Link></p>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" placholder="Password" />
                        </Form.Group>
                        <Button vriant="success" type="button" block>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginPage;