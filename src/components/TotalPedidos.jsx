import React from 'react';

const TotalPedidos = ({ carts }) => {
  return (
    <section className="total-prod">
      <h2>Número total de los pedidos que fueron realizados: </h2>
      <p>{carts.length}</p>
    </section>
  );
};

export default TotalPedidos;
