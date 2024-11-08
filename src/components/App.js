import React, { useState, useEffect } from "react";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        setPlants((prevPlants) => [...prevPlants, addedPlant]);
      });
  }

  function handleMarkAsSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, soldOut: true } : plant
    );
    setPlants(updatedPlants);

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ soldOut: true }),
    });
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        onMarkAsSoldOut={handleMarkAsSoldOut}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
