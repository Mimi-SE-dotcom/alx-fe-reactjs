import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="text-blue-500 hover:underline inline-block mt-4"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;