import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = () => {
    setShowProducts(!showProducts);
  };

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <section className="metrica">
      <h2>Total de productos:</h2>
      <p>{products.length}</p>
      <button onClick={handleShowProducts}>
        {showProducts ? 'Ocultar 20 productos' : 'Mostrar 20 productos'}
      </button>
      {showProducts && (
        <section className={`product-list ${showProducts ? 'visible' : ''}`}>
          {products.slice(0, 20).map(product => (
            <section key={product.id}>
          <p>ID: {product.id}</p>
          <p>Titulo: {product.title}</p>
          <p>Precio: {product.price}</p>
          <p>Categoría: {product.category}</p>
          <p>Descripción: {product.description}</p>
          <img src={product.image} alt={product.title} className='imagen-productos' />
          </section>
          ))}
        </section>
      )}
    </section>
  );
};

export default TotalProductos;



