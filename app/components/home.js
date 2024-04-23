"use client";
import { useState, useEffect } from "react";
import Header from "./header";
import SearchBar from "./searchBar";
import RecipeCard from "./recipeCard";
import RecipeDetails from "./recipeDetails";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSelectedRecipe(data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const toggleFavorite = (recipeId) => {
    const isFavorite = favorites.includes(recipeId);
    if (isFavorite) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== recipeId));
    } else {
      // Add to favorites
      setFavorites([...favorites, recipeId]);
    }
  };

  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar handleSearch={handleSearch} />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : recipes ? (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                handleRecipeClick={handleRecipeClick}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            ))
          ) : (
            <p className="Text text-3xl">No recipes found.</p>
          )}
        </section>
      </main>
      <RecipeDetails
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
      />
    </div>
  );
};

export default Home;
