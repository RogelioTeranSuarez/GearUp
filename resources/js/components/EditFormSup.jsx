import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

function EditFormSup({ show, handleCloseModal, handleSave, supplier }) {
    const [formData, setFormData] = useState({
        name: supplier.name,
        address: supplier.address,
        phone: supplier.phone,
    });

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setFormData({
            name: supplier.name,
            address: supplier.address,
            phone: supplier.phone,
        });
    }, [supplier]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar los datos
        const { name, address, phone } = formData;
        if (!name || !address || !phone) {
            console.error('Todos los campos son obligatorios');
            return;
        }
        handleUpdateSupplier();
    };

    const handleClose = () => {
        // Restaurar los datos originales del proveedor al cerrar el modal
        setFormData({
            name: supplier.name,
            address: supplier.address,
            phone: supplier.phone,
        });
        handleCloseModal(false); // Llamada a la función para cerrar el modal
    };

    const handleUpdateSupplier = () => {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('address', formData.address);
        data.append('phone', formData.phone);

        axios.post(`http://localhost/public/api/suppliers/${supplier.id}`, data , {
            headers: {
                Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
            }
        })
            .then(res => {
                // Llamar a la función handleSave para actualizar la interfaz con los datos actualizados
                handleSave(formData);
            })
            .catch(err => console.error(err));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ backgroundColor: '#444', color: '#fff' }}>
                <Modal.Title>Edit supplier</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#333', color: '#fff' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
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

export default EditFormSup;