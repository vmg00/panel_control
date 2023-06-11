import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TotalProductos from './TotalProductos';
import TotalPedidos from './TotalPedidos';
import IngresosTotales from './IngresosTotales';
import PrecioPromProductos from './PrecioPromProductos';
import ProductosMasVendidos from './ProductosMasVendidos';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('https://fakestoreapi.com/products');
        setProducts(productsResponse.data);

        const cartsResponse = await axios.get('https://fakestoreapi.com/carts');
        setCarts(cartsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="dashboard">
      <h1>Panel de control</h1>
      {loading ? (
        <section className="loader-container">
          <div className="loader"></div>
        </section>
      ) : (
        <section className="dashboard-container">
          <TotalProductos products={products} />
          <TotalPedidos carts={carts} />
          <IngresosTotales carts={carts} />
          <PrecioPromProductos products={products} />
          <ProductosMasVendidos carts={carts} products={products} />
        </section>
      )}
    </section>
  );
};

export default Dashboard;
