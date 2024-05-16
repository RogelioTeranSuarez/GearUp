import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditForm from './EditForm';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [ModelsNames, setModelName] = useState({});
  const [categoriesNames, setCategorieName] = useState({});
  const [suppliersNames, setSupplierName] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      await axios.put(`http://localhost/public/api/products/${selectedProduct.id}`, formData);
      // Recargar los productos
      fetchData();
      // Cerrar la ventana modal
      setShowModal(false);
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const fetchData = async () => {

    try {
      const [productsResponse, categoriesResponse, suppliersResponse, carModelsResponse] = await Promise.all([
        axios.get("http://localhost/public/api/products"),
        axios.get("http://localhost/public/api/categories"),
        axios.get("http://localhost/public/api/supplier"),
        axios.get("http://localhost/public/api/carModel")
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
                  No. Parte: <span style={{ float: 'right' }}>{product.no_part}</span>
                </ListGroup.Item>
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
              </ListGroup>
              <Card.Body style={{ backgroundColor: '#444', color: '#fff', textAlign: 'center', fontSize: '15px' }}>
                <Card.Link href="#" onClick={() => handleEdit(product)}>Edit Product</Card.Link>
                {/* Asegúrate de reemplazar "#" con la ruta correcta para editar el producto */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && (
        <EditForm
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