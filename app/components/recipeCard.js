import Image from "next/image";

const RecipeCard = ({
  recipe,
  handleRecipeClick,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <div
      className="bg-white text-black rounded-lg shadow-md overflow-hidden relative"
      onClick={() => handleRecipeClick(recipe.idMeal)}
    >
      <div className="relative h-48">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
        <p className="text-gray-600">{recipe.strArea}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.idMeal);
          }}
        >
          {isFavorite(recipe.idMeal)
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
        <br></br>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRecipeClick(recipe.idMeal);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

// "use client";
// // components/Home.js
// import { useRouter } from "next/navigation";

// const Home = ({ recipes }) => {
//   const router = useRouter();

//   const handleRecipeClick = (recipeId) => {
//     router.push(`/recipe/${recipeId}`);
//   };

//   return (
//     <div>
//       {recipes &&
//         recipes.map((recipe) => (
//           <div
//             key={recipe.idMeal}
//             onClick={() => handleRecipeClick(recipe.idMeal)}
//           >
//             {/* Display recipe image and details */}
//             <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//             <p>{recipe.strMeal}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Home;
