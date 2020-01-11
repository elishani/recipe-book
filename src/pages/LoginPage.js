import React, { Component } from 'react';
import './LoginPage.css'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state ={
            email: "",
            pwd: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    login(){
        alert(this.state.email + " " + this.state.pwd);
    }

    render(){
        const { email, pwd } = this.state;
        return(
            <div className="p-login">
                <div className="main">
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" value={email}
                            type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="pwd" value={pwd}
                            type="password" placeholder="Password" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button vriant="success" type="button" block onClick={this.login}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginPage;