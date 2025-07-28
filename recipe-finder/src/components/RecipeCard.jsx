// src/components/RecipeCard.jsx
import './RecipeCard.css';

function RecipeCard({ meal, onSelect }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-image" />
      <h3 className="recipe-title">{meal.strMeal}</h3>
    </div>
  );
}

export default RecipeCard;
