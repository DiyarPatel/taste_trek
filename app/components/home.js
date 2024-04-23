import React, { useState, useEffect } from "react";
import Header from "./header";
import SearchBar from "./searchBar";
import RecipeCard from "./recipeCard";
import RecipeDetails from "./recipeDetails";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
        setRecipes(data.meals || []);
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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <SearchBar handleSearch={handleSearch} />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p>Loading...</p>
          ) : recipes.length ? (
            recipes.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                handleRecipeClick={handleRecipeClick}
              />
            ))
          ) : (
            <p className="Text 3xl">No recipes found.</p>
          )}
        </section>
      </main>
      <footer className="bg-white py-4 text-center">
        <div className="text-black">Contact Us: mistryAndPatel@gmail.com</div>
        <div className="text-black">
          &copy; 2024 Your Website Name. All rights reserved.
        </div>
      </footer>
      <RecipeDetails selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Home;
