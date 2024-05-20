import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

function EditFormAcc({ show, handleCloseModal, handleSave, employee, fetchData }) {
    const [formData, setFormData] = useState({
        first_name: employee.first_name,
        last_name: employee.last_name,
        address: employee.address,
        phone: employee.phone,
        email: employee.email,
        SSN: employee.SSN,
        roles_id: employee.roles_id,
    });

    const [originalEmail, setOriginalEmail] = useState(""); // Nuevo estado para almacenar el correo electrónico original

    useEffect(() => {
        // Al cargar el componente, establece el correo electrónico original
        console.log("Original Email:", employee.email);
        setOriginalEmail(employee.email);
        // Establece los datos del formulario
        setFormData({
            first_name: employee.first_name,
            last_name: employee.last_name,
            address: employee.address,
            phone: employee.phone,
            email: employee.email,
            SSN: employee.SSN,
            roles_id: employee.roles_id,
        });
    }, [employee]);

    const { auth } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { first_name, last_name, address, phone, email, SSN, roles_id } = formData;
        if (!first_name || !last_name || !address || !phone || !email || !SSN || !roles_id) {
            console.error('All fields are required');
            return;
        }

        // Prevent self-role change
        if (auth.user) {
            console.log("User Email:", auth.user.email);
            console.log("Original Email:", originalEmail);
            if (auth.user.email === originalEmail) {
                console.error('You cannot change your own role.');
                return;
            }
        }

        handleUpdateEmployee();
    };


    const handleClose = () => {
        setFormData({
            first_name: employee.first_name,
            last_name: employee.last_name,
            address: employee.address,
            phone: employee.phone,
            email: employee.email,
            SSN: employee.SSN,
            roles_id: employee.roles_id,
        });
        handleCloseModal(false);
    };

    const handleUpdateEmployee = async () => {
        try {
            await axios.put(`http://localhost/public/api/employees/${employee.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });

            // Check if role changed and create/delete account accordingly
            if (formData.roles_id !== employee.roles_id) {
                const adminRoleId = 1; // Replace with the actual ID of the admin role
                if (formData.roles_id == adminRoleId) {
                    // Create admin account
                    await axios.post(`http://localhost/public/api/register`, {
                        name: `${formData.first_name} ${formData.last_name}`,
                        email: formData.email,
                        password: 'password', // Default password, should be updated later
                        password_confirmation: 'password', // Default password confirmation
                        role_id: adminRoleId
                    }, {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                } else if (employee.roles_id == adminRoleId) {
                    // Delete admin account
                    await axios.delete(`http://localhost/public/api/users/deleteByEmail/${employee.email}`, {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                }
            }

            handleSave(formData);
            fetchData();
        } catch (err) {
            console.error("Error updating employee:", err);
        }
    };


    // Prevent self-edit
    if (auth.user && auth.user.email === employee.email) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#444', color: '#fff' }}>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#333', color: '#fff' }}>
                    <p>You cannot edit your own role while logged in.</p>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#444', color: '#fff' }}>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ backgroundColor: '#444', color: '#fff' }}>
                <Modal.Title>Edit Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#333', color: '#fff' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="SSN">
                        <Form.Label>SSN</Form.Label>
                        <Form.Control
                            type="text"
                            name="SSN"
                            value={formData.SSN}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="roles_id">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                            as="select"
                            name="roles_id"
                            value={formData.roles_id}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        >
                            <option value="1">Administrator</option>
                            <option value="2">Employee</option>
                            {/* Add more roles as needed */}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#444', color: '#fff' }}>
                <Row style={{ width: '100%' }}>
                    <Col xs={6} style={{ textAlign: 'right' }}>
                        <Button style={{ width: '80%' }} variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                    <Col xs={6} style={{ textAlign: 'left' }}>
                        <Button style={{ width: '80%' }} variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default EditFormAcc;