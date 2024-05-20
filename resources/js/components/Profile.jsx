import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from "./AuthProvider";

function Profile() {
    const [userProfile, setUserProfile] = useState({});
    const [employeeData, setEmployeeData] = useState({});

    const { auth } = useContext(AuthContext);

    const fetchData = async () => {
        try {
            const [profileResponse, employeeResponse] = await Promise.all([
                axios.get("http://localhost/public/api/user", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }),
                axios.get("http://localhost/public/api/employees", {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }),
            ]);

            setUserProfile(profileResponse.data);
            const employee = employeeResponse.data.find(emp => emp.email === profileResponse.data.email);
            setEmployeeData(employee);
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
                <Col xs={12} md={6} lg={6} xl={3}>
                    <Card style={{ margin: '30px 15px', backgroundColor: '#333', color: '#fff', height: '90%' }}>
                        <Card.Body>
                            <Card.Title>User Profile</Card.Title>
                            <Card.Text>Name: {userProfile.name}</Card.Text>
                            <Card.Text>Email: {userProfile.email}</Card.Text>
                            {employeeData && (
                                <>
                                    <Card.Text>Address: {employeeData.address}</Card.Text>
                                    <Card.Text>Phone: {employeeData.phone}</Card.Text>
                                    <Card.Text>SSN: {employeeData.SSN}</Card.Text>
                                    {/* Add other employee data here */}
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;