// src/App.js
import "./App.css";
import foodData from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from "./components/AddFoodForm.jsx";
import Search from "./components/Search.jsx";

export default function App() {
  const [food, setFood] = useState(foodData);
  const [filteredFood, setFilteredFood] = useState(foodData);

  function createFood(body) {
    body._id = parseInt(Math.random() * 10000);
    setFood([body, ...food]); // movies.concat([body])
  }

  function filterFood(string) {
    if (food.name === "") {
      setFilteredFood(food);
    } else {
      setFilteredFood(
        food.filter((food) =>
          food.name.toLowerCase().includes(string.toLowerCase())
        )
      );
    }
  }

  function deleteFood(index) {
    const clonearr = [...filteredFood];
    clonearr.splice(index, 1);
    setFood(clonearr);
    setFilteredFood(clonearr);
  }

  return (
    <div>
      <AddFoodForm parentCb={createFood} />
      <Search filterFood={filterFood} />
      <h1>Food List </h1>
      <div className="foodList">
        {filteredFood.map((food, index) => {
          return (
            <FoodBox
              key={food.name + index}
              thekey={index}
              food={food}
              handleDelete={deleteFood}
            />
          );
        })}
      </div>
    </div>
  );
}
