import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

function Login() {
    const [formValue, setFormValue] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Asegúrate de prevenir el comportamiento por defecto del formulario
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

            const token = response.data.token; // Usar la variable token
            setAuth({ token });
            navigate("/", { state: { token } });
        } catch (error) {
            // Verifica si el backend proporciona un mensaje de error específico
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("La contraseña o el usuario están incorrectas");
            }
            console.log("Error during login: ", error);
        }
    };

    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#333' }}>
                <Card style={{ width: '100%', maxWidth: '400px', backgroundColor: '#444', color: '#fff' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Login</Card.Title>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formValue.email}
                                    onChange={onChange}
                                    required
                                    style={{ backgroundColor: '#333', color: '#fff' }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formValue.password}
                                    onChange={onChange}
                                    required
                                    style={{ backgroundColor: '#333', color: '#fff' }}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ width: '100%' }}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}

export default Login;