import React, { useState, useEffect } from 'react';


function Catalog() {
    const [products, setProducts] = useState([]);
    const [ModelsNames, setModelName] = useState({});
    const [categoriesNames, setCategorieName] = useState({});
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost/public/api/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        const fetchModelName = async () => {
          const modelNameMap = {};
          for (const product of products) {
            const modelId = product.car_models_id;
            if (!modelNameMap[modelId]) {
              try {
                const response = await axios.get(`http://localhost/public/api/carModel/${modelId}`);
                modelNameMap[modelId] = response.data.name;
              } catch (error) {
                console.error(`Error fetching program data for program ID ${modelId}:`, error);
                modelNameMap[modelId] = " Modelo no encontrado ";
              }
            }
          }
          setModelName(modelNameMap);
        };
    

        const fetchcategoriesName = async () => {
          const categoriesNameMap = {};
          for (const product of products) {
            const categoriesId = product.categories_id;
            if (!categoriesNameMap[categoriesId]) {
              try {
                const response = await axios.get(`http://localhost/public/api/categories/${categoriesId}`);
                categoriesNameMap[categoriesId] = response.data.name;
              } catch (error) {
                console.error(`Error fetching program data for program ID ${categoriesId}:`, error);
                categoriesNameMap[categoriesId] = "Programa no encontrado";
              }
            }
          }
          setCategorieName(categoriesNameMap);
        };
    
        if (products.length > 0) {
          fetchcategoriesName();
          fetchModelName();
        }
      }, [products]);





  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div>
            <span>No. Parte: {product.no_part}</span>
            <span>Categoría: {categoriesNames[product.categories_id]}</span>
            <span>Modelo: {ModelsNames[product.car_models_id]}</span>
            <span>Precio: {product.price}</span>
          </div>
          <div>
            <span>Proveedor: {product.suppliers_id}</span>
          </div>
        </div>
      ))}
    </div>



  );
}
  
  export default Catalog;