import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function Login() {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [formValue, setFormValue] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        setError(null); // Clear previous errors
        const formData = {
            email: formValue.email,
            password: formValue.password
        };

        try {
            const response = await axios.post("http://localhost/public/api/login", formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            const token2 = response.data.token; // Cambiamos el nombre de la variable aquí
            setAuth({ token: token2 });
            setToken(token2);
            navigate("/", { state: { token: token2 } });
        } catch (error) {
            setError("La contraseña o el usuario están incorrectas");
            console.log("Error during login: ", error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <h2>Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email} onChange={onChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={formValue.password} onChange={onChange} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Link to="/register" className="d-block mt-3">¿No tienes cuenta? Crea una aquí</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;