// src/App.jsx
import { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchMeals = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  const fetchMealDetails = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  };

  return (
    <div className="app">
      <h1>🍽️ Recipe Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          placeholder="Search meals by name..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMeals}>Search</button>
      </div>

      <div className="grid">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onSelect={fetchMealDetails} />
        ))}
      </div>

      {selectedMeal && (
        <RecipeDetails meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}

export default App;
