import Image from "next/image";

const RecipeCard = ({ recipe, handleRecipeClick }) => {
  return (
    <div
      className="bg-white text-black rounded-lg shadow-md overflow-hidden relative"
      onClick={() => handleRecipeClick(recipe.idMeal)}
      style={{ transition: "box-shadow 0.3s" }}
      onMouseOver={(e) =>
        (e.currentTarget.style.boxShadow = "0 8px 12px rgba(25, 25, 112, 0.5)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
      }
    >
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.strMeal}</h3>
        <p className="text-gray-600 mb-4">{recipe.strArea}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRecipeClick(recipe.idMeal);
          }}
          className="bg-white text-black px-4 py-2 rounded-md transition duration-300 hover:bg-blue-50"
          style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
