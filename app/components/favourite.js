// pages/favorites.js
import { useState, useEffect } from "react";
import Link from "next/link";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // You may fetch the favorite recipes here or use a storage solution (localStorage, etc.)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((recipeId) => (
            <li key={recipeId}>
              {/* Render the details of each favorite recipe */}
              <Link href={`/recipe/${recipeId}`}>
                <a>{/* Recipe details go here */}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet.</p>
      )}
      <Link href="/">
        <a className="text-blue-500 hover:underline">Back to Home</a>
      </Link>
    </div>
  );
};

export default FavoritesPage;
