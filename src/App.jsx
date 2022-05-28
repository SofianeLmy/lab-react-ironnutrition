import React from 'react';
import 'bulma/css/bulma.css';
import food from './foods.json';
import FoodBox from './Components/FoodBox';
import { useState } from 'react';
import AddFood from './Components/AddFood';

function App() {
  const [foods, setFoods] = useState(food);

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      
      <form className="form">
        
        <input type="text" name="name" />
        <input type="text" name="calories" />
        <input type="text" name="quantity" />
        <button type="submit">Add new foods</button>
        
      </form>
      {foods.map((food) => {
        return (
          <FoodBox
            name={food.name}
            calories={food.calories}
            quantity={food.quantity}
            image={food.image}
          />
        );
      })}
    </div>
  );
}

export default App;
