import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import EditFormSup from "./EditFormSup";
import EditFormMod from "./EditFormMod";
import { AuthContext } from "./AuthProvider";

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [modelsBySupplier, setModelsBySupplier] = useState({});
    const [showSupplierModal, setShowSupplierModal] = useState(false);
    const [showModelModal, setShowModelModal] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [selectedModels, setSelectedModels] = useState([]);

    const { auth } = useContext(AuthContext);

    const handleEditSupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setShowSupplierModal(true);
    };

    const handleEditModels = (supplier) => {
        setSelectedSupplier(supplier);
        setSelectedModels(modelsBySupplier[supplier.id] || []);
        setShowModelModal(true);
    };

    const handleCloseSupplierModal = () => {
        setShowSupplierModal(false);
    };

    const handleCloseModelModal = () => {
        setShowModelModal(false);
    };

    const handleSaveSupplierChanges = async (formData) => {
        try {
            await fetchData();
            setShowSupplierModal(false);
        } catch (error) {
            console.error("Error saving changes:", error);
        }
    };

    const handleSaveModelChanges = async (models) => {
        try {
            await fetchData();
            setShowModelModal(false);
        } catch (error) {
            console.error("Error saving changes:", error);
        }
    };

    const fetchData = async () => {
        try {
            const [suppliersResponse, carModelsResponse] = await Promise.all([
                axios.get("http://localhost/public/api/suppliers",  {
                    headers: {
                      Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
                    }
                  }),
                axios.get("http://localhost/public/api/carModel",  {
                    headers: {
                      Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
                    }
                  }),
            ]);

            setSuppliers(suppliersResponse.data);

            const carModelsMap = {};
            carModelsResponse.data.forEach(carModel => {
                const supplierId = carModel.suppliers_id;
                if (!carModelsMap[supplierId]) {
                    carModelsMap[supplierId] = [];
                }
                carModelsMap[supplierId].push(carModel);
            });
            setModelsBySupplier(carModelsMap);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {suppliers.map(supplier => (
                    <Col xs={12} md={6} lg={4} key={supplier.id}>
                        <Card style={{ margin: '30px 15px', backgroundColor: '#333', color: '#fff', height: '90%', width: '90%' }}>
                            <Card.Body>
                                <Card.Title>{supplier.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Address: <span style={{ float: 'right' }}>{supplier.address}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Phone: <span style={{ float: 'right' }}>{supplier.phone}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Models:
                                    {modelsBySupplier[supplier.id] ? (
                                        <ul style={{ paddingLeft: '10px' }}>
                                            {modelsBySupplier[supplier.id].map((model, index) => (
                                                <li key={model.id}>{model.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No models available</p>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', fontSize: '15px' }}>
                                <Row style={{ width: '100%' }}>
                                    <Col xs={6} className="d-flex justify-content-center">
                                        <Button style={{ width: '100%' }} variant="primary" href="#" onClick={() => handleEditSupplier(supplier)}>
                                            Edit Supplier Information
                                        </Button>
                                    </Col>
                                    <Col xs={6} className="d-flex justify-content-center">
                                        <Button style={{ width: '100%' }} variant="primary" href="#" onClick={() => handleEditModels(supplier)}>
                                            Edit Car Models Information
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedSupplier && (
                <EditFormSup
                    show={showSupplierModal}
                    handleCloseModal={handleCloseSupplierModal}
                    handleSave={handleSaveSupplierChanges}
                    supplier={selectedSupplier}
                />
            )}
            {selectedSupplier && (
                <EditFormMod
                    show={showModelModal}
                    handleCloseModal={handleCloseModelModal}
                    handleSave={handleSaveModelChanges}
                    supplier={selectedSupplier}
                    carModels={selectedModels}
                />
            )}
        </Container>
    );
}

export default Suppliers;