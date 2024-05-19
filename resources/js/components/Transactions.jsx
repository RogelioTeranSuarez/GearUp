import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from "./AuthProvider";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [employeesNames, setEmployeesNames] = useState({});

    const { auth } = useContext(AuthContext);

    const fetchData = async () => {
        try {
            const [transactionsResponse, employeesResponse] = await Promise.all([
                axios.get("http://localhost/public/api/transactions",  {
                    headers: {
                      Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
                    }
                  }),
                axios.get("http://localhost/public/api/employees",  {
                    headers: {
                      Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
                    }
                  }),
            ]);

            setTransactions(transactionsResponse.data);

            const employeesMap = {};
            employeesResponse.data.forEach(employees => {
                employeesMap[employees.id] = `${employees.first_name} ${employees.last_name}`;
            });
            setEmployeesNames(employeesMap);
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
                {transactions.map(transaction => (
                    <Col xs={12} md={6} lg={6} xl={3} key={transaction.id}>
                        <Card style={{ margin: '30px 15px', backgroundColor: '#333', color: '#fff', height: '90%' }}>
                            <Card.Body >
                                <Card.Title>Transaction Type: {transaction.transaction_type}</Card.Title>
                                <Card.Text>Date: {transaction.date}</Card.Text>
                                <Card.Text>Total: {transaction.total}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush" >
                                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                                    Employee: <span style={{ float: 'right' }}>{employeesNames[transaction.employees_id]}</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Transactions;