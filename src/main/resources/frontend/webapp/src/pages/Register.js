import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import AuthService from "../services/AuthService";

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleRegister(event) {
        event.preventDefault();
        AuthService.register(username, email, password)
            .then(res => {
                if(res.data != null) {
                    alert("Successfully !!!");
                }
            })
    }

    return (
        <>
            <Card>
                <div className="Login">

                    <Form onSubmit={handleRegister}>
                        <img
                            src={'https://p.kindpng.com/picc/s/207-2074624_white-gray-circle-avatar-png-transparent-png.png'}
                            alt={'Profile-img'}
                            className={'profile-img-card'} width={100} height={100}
                        />
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={username}
                                onChange={onChangeUsername}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </Form.Group>

                        <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Sign Up
                        </Button>
                        <Form.Label>Have an account, <a href={'/login'}>Log in</a></Form.Label>
                    </Form>
                </div>
            </Card>
        </>
    );
}
export default Register;