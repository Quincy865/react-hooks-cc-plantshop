import React from "react";

function PlantCard({ plant, onMarkAsSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.soldOut ? (
        <button disabled>Out of Stock</button>
      ) : (
        <button className="primary" onClick={() => onMarkAsSoldOut(plant.id)}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;


