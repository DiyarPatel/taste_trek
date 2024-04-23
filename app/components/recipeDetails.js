import React, { useEffect } from "react";
import Image from "next/image";

const RecipeDetails = ({ selectedRecipe, setSelectedRecipe }) => {
  const handleClose = () => {
    setSelectedRecipe(null);
  };

  // Handle click events on the modal content to prevent propagation
  const handleContentClick = (e) => {
    e.stopPropagation(); // Stop event propagation
  };

  useEffect(() => {
    if (selectedRecipe) {
      // Prevent scrolling on the background page when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow scrolling on the background page when modal is closed
      document.body.style.overflow = "auto";
    }

    // Clean up the style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRecipe]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        selectedRecipe ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="modal-overlay bg-black opacity-10 absolute inset-0"
        onClick={handleClose}
      ></div>
      <div className="modal-container flex items-center justify-center h-full overflow-y-auto">
        {selectedRecipe && (
          <div
            className="modal-content bg-white rounded-lg p-8 max-w-md w-full"
            onClick={handleContentClick}
          >
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-2xl font-bold">{selectedRecipe.strMeal}</h2>
              <button className="modal-close text-3xl" onClick={handleClose}>
                &times;
              </button>
            </div>
            <Image
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="py-2 overflow-y-auto max-h-60">
              <p>{selectedRecipe.strInstructions}</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleClose}
                className="modal-close-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 12px rgba(25, 25, 112, 0.5)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)")
                }
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
