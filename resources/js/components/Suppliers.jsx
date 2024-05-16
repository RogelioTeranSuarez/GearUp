import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const [modelsBySupplier, setModelsBySupplier] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [suppliersResponse, carModelsResponse] = await Promise.all([
                    axios.get("http://localhost/public/api/supplier"),
                    axios.get("http://localhost/public/api/carModel")
                ]);

                setSuppliers(suppliersResponse.data);

                const carModelsMap = {};
                carModelsResponse.data.forEach(carModel => {
                    const supplierId = carModel.suppliers_id;
                    if (!carModelsMap[supplierId]) {
                        carModelsMap[supplierId] = [];
                    }
                    carModelsMap[supplierId].push(carModel.name);
                });
                setModelsBySupplier(carModelsMap);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

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
                                                <li key={index}>{model}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No models available</p>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', fontSize: '15px' }}>
                                <Card.Link href="#">Edit Supplier Information</Card.Link>
                                {/* Asegúrate de reemplazar "#" con la ruta correcta para editar el proveedor */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Suppliers;