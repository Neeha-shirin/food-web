// src/components/RecipeDetails.jsx
import './RecipeDetails.css';

function RecipeDetails({ meal, onClose }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{meal.strInstructions}</p>
        {meal.strYoutube && (
          <p>
            <a href={meal.strYoutube} target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RecipeDetails;
