import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onMarkAsSoldOut, onSearch }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} />
      <PlantList plants={plants} onMarkAsSoldOut={onMarkAsSoldOut} />
    </main>
  );
}

export default PlantPage;
