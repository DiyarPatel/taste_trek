"use client";
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
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold color: to-black">
            Discover Delicious Food Adventures
          </h2>
          <p className="text-gray-600">
            Explore the world of flavors with TasteTrek
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar handleSearch={handleSearch} />

        {/* Recipe Cards */}
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
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2024 TasteTrek. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
      <RecipeDetails selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default Home;
