import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

function EditFormAcc({ show, handleCloseModal, handleSave, employee }) {
    const [formData, setFormData] = useState({
        first_name: employee.first_name,
        last_name: employee.last_name,
        address: employee.address,
        phone: employee.phone,
        email: employee.email,
        SSN: employee.SSN,
        roles_id: employee.roles_id,
    });

    const { auth } = useContext(AuthContext);

    useEffect(() => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, address, phone, email, SSN, roles_id } = formData;
        if (!first_name || !last_name || !address || !phone || !email || !SSN || !roles_id) {
            console.error('All fields are required');
            return;
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

    const handleUpdateEmployee = () => {
        axios.put(`http://localhost/public/api/employees/${employee.id}`, formData, {
            headers: {
                Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
            }
        })
            .then(res => {
                handleSave(formData);
            })
            .catch(err => console.error(err));
    };

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
                            {/* Aquí puedes generar opciones dinámicamente si obtienes la lista de roles desde la API */}
                            <option value="1">Role 1</option>
                            <option value="2">Role 2</option>
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