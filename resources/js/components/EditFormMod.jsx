import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

function EditFormMod({ show, handleCloseModal, handleSave, supplier, carModels }) {
    const [models, setModels] = useState(carModels);
    const [newModel, setNewModel] = useState("");
    const [removedModels, setRemovedModels] = useState([]);
    const [deleteErrors, setDeleteErrors] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        setModels(carModels);
        setRemovedModels([]);
        setDeleteErrors([]);
        setErrorMessage("");
    }, [carModels]);

    const handleModelChange = (index, e) => {
        const updatedModels = [...models];
        updatedModels[index][e.target.name] = e.target.value;
        setModels(updatedModels);
    };

    const handleAddModel = async () => {
        if (newModel) {
            try {
                const response = await axios.post(
                    "http://localhost/public/api/carModel",
                    {
                        name: newModel,
                        suppliers_id: supplier.id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    }
                );
                setModels([...models, response.data]);
                setNewModel("");
            } catch (error) {
                console.error("Error adding model:", error);
            }
        }
    };

    const handleVisualRemoveModel = (index) => {
        const updatedModels = [...models];
        const removedModel = updatedModels.splice(index, 1)[0];
        setModels(updatedModels);
        if (removedModel.id) {
            setRemovedModels([...removedModels, removedModel.id]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const updatePromises = models.map(model => {
                if (model.id) {
                    return axios.put(`http://localhost/public/api/carModel/${model.id}`, model, {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                }
                return null;
            }).filter(Boolean);

            const deletePromises = removedModels.map(modelId => 
                axios.delete(`http://localhost/public/api/carModel/${modelId}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }).catch(error => {
                    if (error.response && error.response.status === 400) {
                        setDeleteErrors(prevErrors => [...prevErrors, modelId]);
                    } else {
                        throw error;
                    }
                })
            );

            await Promise.all([...updatePromises, ...deletePromises]);

            if (deleteErrors.length > 0) {
                const notDeletedModels = removedModels.filter(modelId => deleteErrors.includes(modelId));
                const notDeletedModelNames = carModels
                    .filter(model => notDeletedModels.includes(model.id))
                    .map(model => model.name);
                setErrorMessage(`Cannot delete the following models because they are associated with one or more products: ${notDeletedModelNames.join(', ')}`);
                setDeleteErrors([]);
                // Restore models that could not be deleted
                setModels([...models, ...carModels.filter(model => notDeletedModels.includes(model.id))]);
            } else {
                handleSave(models);
                handleCloseModal();
            }
        } catch (error) {
            console.error("Error updating models:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton style={{ backgroundColor: '#444', color: '#fff' }}>
                <Modal.Title>Edit Car Models</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#333', color: '#fff' }}>
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={handleSubmit}>
                    {models.map((model, index) => (
                        <Form.Group key={index} controlId={`model-${index}`}>
                            <Form.Label>Model Name</Form.Label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={model.name}
                                    onChange={(e) => handleModelChange(index, e)}
                                    style={{ backgroundColor: '#444', color: '#fff', marginRight: '10px' }}
                                />
                                <Button variant="danger" onClick={() => handleVisualRemoveModel(index)}>Remove</Button>
                            </div>
                        </Form.Group>
                    ))}
                    <Form.Group controlId="newModel">
                        <Form.Label>New Model Name</Form.Label>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Form.Control
                                type="text"
                                value={newModel}
                                onChange={(e) => setNewModel(e.target.value)}
                                style={{ backgroundColor: '#444', color: '#fff', marginRight: '10px' }}
                            />
                            <Button variant="success" onClick={handleAddModel}>Add</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#444', color: '#fff' }}>
                <Row style={{ width: '100%' }}>
                    <Col xs={6} style={{ textAlign: 'right' }}>
                        <Button style={{ width: '80%' }} variant="secondary" onClick={handleCloseModal}>
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

export default EditFormMod;