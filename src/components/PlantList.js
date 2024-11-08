import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onMarkAsSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onMarkAsSoldOut={onMarkAsSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
