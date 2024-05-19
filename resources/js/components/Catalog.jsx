import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import EditFormCat from './EditFormCat';
import { AuthContext } from "./AuthProvider";

function Catalog() {
  const { auth } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [ModelsNames, setModelName] = useState({});
  const [categoriesNames, setCategorieName] = useState({});
  const [suppliersNames, setSupplierName] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inventory, setInventory] = useState({});

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleSaveChanges = async (formData) => {
    try {
        // Actualizar los datos en el servidor
        await axios.put(`http://localhost/public/api/products/${selectedProduct.id}`, 
            formData, // El objeto formData debe ir como el segundo parámetro
            {
                headers: {
                    Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
                }
            }
        );
        // Recargar los productos
        fetchData();
        // Cerrar la ventana modal
        setShowModal(false);
    } catch (error) {
        console.error("Error saving changes:", error);
    }
};

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost/public/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}` // Agrega el token de autenticación aquí
        }
      }),
        // Recargar los productos después de eliminar uno
        fetchData();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Cannot delete this product because it is associated with the existing inventory.");
      } else {
        console.error("Error removing product:", error);
      }
    }
  };

  const fetchData = async () => {
    try {
      const [productsResponse, categoriesResponse, suppliersResponse, carModelsResponse, inventoryResponse] = await Promise.all([
        axios.get("http://localhost/public/api/products", {
          headers: {
            Authorization: `Bearer ${auth.token}` // Token de autenticación para obtener productos
          }
        }),
        axios.get("http://localhost/public/api/categories", {
          headers: {
            Authorization: `Bearer ${auth.token}` // Token de autenticación para obtener categorías
          }
        }),
        axios.get("http://localhost/public/api/suppliers", {
          headers: {
            Authorization: `Bearer ${auth.token}` // Token de autenticación para obtener proveedores
          }
        }),
        axios.get("http://localhost/public/api/carModel", {
          headers: {
            Authorization: `Bearer ${auth.token}` // Token de autenticación para obtener modelos de automóviles
          }
        }),
        axios.get("http://localhost/public/api/inventory", {
          headers: {
            Authorization: `Bearer ${auth.token}` // Token de autenticación para obtener inventario
          }
        }),
      ]);
      setProducts(productsResponse.data);

      const categoriesMap = {};
      categoriesResponse.data.forEach(category => {
        categoriesMap[category.id] = category.name;
      });
      setCategorieName(categoriesMap);

      const suppliersMap = {};
      suppliersResponse.data.forEach(supplier => {
        suppliersMap[supplier.id] = supplier.name;
      });
      setSupplierName(suppliersMap);

      const carModelsMap = {};
      carModelsResponse.data.forEach(carModel => {
        carModelsMap[carModel.id] = carModel.name;
      });
      setModelName(carModelsMap);

      const inventoryMap = {};
      inventoryResponse.data.forEach(item => {
        inventoryMap[item.products_id] = item.quantity;
      });
      setInventory(inventoryMap);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col xs={12} md={6} lg={6} xl={3} key={product.id}>
            <Card style={{ margin: '30px 15px', backgroundColor: '#333', color: '#fff', height: '90%' }}>
              <Card.Img variant="top" src={'http://localhost:3000/images/' + product.image} />
              <Card.Body >
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush" >
                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                  Category: <span style={{ float: 'right' }}>{categoriesNames[product.categories_id]}</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                  Model: <span style={{ float: 'right' }}>{ModelsNames[product.car_models_id]}</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                  Price: <span style={{ float: 'right' }}>{product.price}</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                  Provider: <span style={{ float: 'right' }}>{suppliersNames[product.suppliers_id]}</span>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#333', color: '#fff' }}>
                  Available Quantity: <span style={{ float: 'right' }}>{inventory[product.id]}</span>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', fontSize: '15px' }}>
                <Row style={{ width: '100%' }}>
                  <Col xs={6} className="d-flex justify-content-center">
                    <Button style={{ width: '100%' }} variant="primary" href="#" onClick={() => handleEdit(product)}>
                      Edit Product
                    </Button>
                  </Col>
                  <Col xs={6} className="d-flex justify-content-center">
                    <Button style={{ width: '100%' }} variant="danger" href="#" onClick={() => handleDelete(product.id)}>
                      Delete Product
                    </Button>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && (
        <EditFormCat
          show={showModal}
          handleCloseModal={handleCloseModal}
          handleSave={handleSaveChanges}
          product={selectedProduct}
          productImageUrl={`http://localhost:3000/images/${selectedProduct.image}`}
        />
      )}
    </Container>
  );
}

export default Catalog;