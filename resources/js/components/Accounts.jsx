import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import EditFormAcc from './EditFormAcc';
import { AuthContext } from "./AuthProvider";

function Accounts() {
    const [employees, setEmployees] = useState([]);
    const [rolesNames, setRoleNames] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const { auth } = useContext(AuthContext);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async (formData) => {
        fetchData();
        setShowModal(false);
    };

    const handleDelete = async (employeeId) => {
        try {
            await axios.delete(`http://localhost/public/api/employees/${employeeId}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            fetchData();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Cannot delete this employee because it is associated with existing records.");
            } else if (error.response && error.response.status === 500) {
                alert("Cannot delete this employee because it is associated with existing records.");
            } else {
                alert("Error removing employee. Please try again.");
                console.error("Error removing employee:", error);
            }
        }
    };

    const fetchData = async () => {
        try {
            const [employeesResponse, rolesResponse] = await Promise.all([
                axios.get("http://localhost/public/api/employees", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }),
                axios.get("http://localhost/public/api/roles", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }),
            ]);

            setEmployees(employeesResponse.data);

            const rolesMap = {};
            rolesResponse.data.forEach(role => {
                rolesMap[role.id] = role.name;
            });
            setRoleNames(rolesMap);
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
                {employees.map(employee => (
                    <Col xs={12} md={6} lg={6} xl={3} key={employee.id}>
                        <Card style={{ margin: '30px 15px', backgroundColor: '#333', color: '#fff', height: '90%' }}>
                            <Card.Body>
                                <Card.Title>{employee.first_name} {employee.last_name}</Card.Title>
                                <Card.Text>{employee.address}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Role: <span style={{ float: 'right' }}>{rolesNames[employee.roles_id]}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Phone: <span style={{ float: 'right' }}>{employee.phone}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Email: <span style={{ float: 'right' }}>{employee.email}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    SSN: <span style={{ float: 'right' }}>{employee.SSN}</span>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', fontSize: '15px' }}>
                                <Row style={{ width: '100%' }}>
                                    <Col xs={6} className="d-flex justify-content-center">
                                        <Button style={{ width: '100%' }} variant="primary" href="#" onClick={() => handleEdit(employee)}>
                                            Edit Employee
                                        </Button>
                                    </Col>
                                    <Col xs={6} className="d-flex justify-content-center">
                                        <Button style={{ width: '100%' }} variant="danger" href="#" onClick={() => handleDelete(employee.id)}>
                                            Delete Employee
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedEmployee && (
                <EditFormAcc
                    show={showModal}
                    handleCloseModal={handleCloseModal}
                    handleSave={handleSaveChanges}
                    employee={selectedEmployee}
                    fetchData={fetchData}
                />
            )}
        </Container>
    );
}

export default Accounts;