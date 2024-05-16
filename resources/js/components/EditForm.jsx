import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditForm({ show, handleCloseModal, handleSave, product, productImageUrl }) {
    const [formData, setFormData] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        categories_id: product.categories_id,
        suppliers_id: product.suppliers_id,
        car_models_id: product.car_models_id,
        image: product.image
    });


    const [imageFile, setImageFile] = useState(product.image ? new File([], product.image) : null);
    const [previewImage, setPreviewImage] = useState(product.image ? product.image : null);

    useEffect(() => {
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            categories_id: product.categories_id,
            suppliers_id: product.suppliers_id,
            car_models_id: product.car_models_id,
            image: product.image
        });

        setImageFile(product.image ? new File([], product.image) : null);
        setPreviewImage(null);
        setPreviewImage(productImageUrl);
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                image: URL.createObjectURL(file)
            }));
            setImageFile(file);
            setPreviewImage(URL.createObjectURL(file));
        } else {
            console.error('Please select a valid image file.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar los datos
        const { name, description, price, categories_id, suppliers_id, car_models_id } = formData;
        if (!name || !description || !price || !categories_id || !suppliers_id || !car_models_id) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        // Verificar si hay una imagen seleccionada
        if (imageFile) {
            uploadFile(imageFile, product.id);
        } else {
            // Si no hay una nueva imagen seleccionada, simplemente actualiza el producto sin subir una nueva imagen
            handleUpdateProduct();
        }
        handleUpdateProduct();
    };

    const handleClose = () => {
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            categories_id: product.categories_id,
            suppliers_id: product.suppliers_id,
            car_models_id: product.car_models_id,
            image: product.image
        });
        setImageFile(product.image ? new File([], product.image) : null);
        setPreviewImage(productImageUrl);
        handleCloseModal(false); // Llamada a la función para cerrar el modal
    };

    const uploadFile = async (file, productId) => {
        try {
            // Verificar si el archivo no está vacío antes de subirlo
            if (file.size > 0) {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('productId', productId);
                const response = await axios.post(`http://localhost:3000/upload`, formData);

                if (response.data.Status === "Success") {
                    console.log("Upload succeeded");
                    // Si la carga de la imagen es exitosa, actualiza el producto
                    handleUpdateProduct();
                } else {
                    console.log("Upload failed");
                }
            } else {
                console.log('---- No Image Upload ----');
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };


    const handleUpdateProduct = () => {
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('categories_id', formData.categories_id);
        data.append('suppliers_id', formData.suppliers_id);
        data.append('car_models_id', formData.car_models_id);
        if (imageFile) {
            data.append('image', imageFile);
        }

        axios.post(`http://localhost/public/api/productsUPDT/${product.id}`, data)
            .then(res => {
                // Llamar a la función handleSave para actualizar la interfaz con los datos actualizados
                handleSave(formData);
            })
            .catch(err => console.error(err));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ backgroundColor: '#444', color: '#fff' }}>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#333', color: '#fff' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="image" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={handleImageChange} 
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                        {previewImage && <img src={previewImage} alt="Product Image" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                    </Form.Group>
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
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="categories_id">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="categories_id"
                            value={formData.categories_id}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="suppliers_id">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control
                            type="text"
                            name="suppliers_id"
                            value={formData.suppliers_id}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                    <Form.Group controlId="car_models_id">
                        <Form.Label>Car Model</Form.Label>
                        <Form.Control
                            type="text"
                            name="car_models_id"
                            value={formData.car_models_id}
                            onChange={handleChange}
                            style={{ backgroundColor: '#444', color: '#fff' }}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#444', color: '#fff' }}>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditForm;