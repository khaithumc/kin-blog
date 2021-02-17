import React, {useEffect, useState} from 'react';
import "../css/Login.css";
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import AuthService from "../services/AuthService";
import {useHistory} from "react-router-dom";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();


        AuthService.login(username, password)
            .then(res => {
                if(res.data != null) {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    alert("successfully !")
                    history.push("/profile");
                    window.location.reload();
                } else {
                    alert("Username or Password is not valid")
                }
            });
    }

    return (
       <>
           <div className="Login">
               <Form onSubmit={handleSubmit}>
                   <Form.Group size="lg" controlId="email">
                       <Form.Label>Username</Form.Label>
                       <Form.Control
                           autoFocus
                           type="text"
                           value={username}
                           onChange={onChangeUsername}
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
                       Login
                   </Button>
                   <Form.Label>Don't have an account, <a href={'/register'}>Register</a></Form.Label>
               </Form>
           </div>
       </>
    );
}
export default Login;