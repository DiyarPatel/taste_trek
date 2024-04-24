"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const RecipeDetails = ({ selectedRecipe, onClose }) => {
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose(); // Call onClose only if it's a function
    }
  };

  useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRecipe]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${selectedRecipe ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="modal-overlay bg-black opacity-10 absolute inset-0" onClick={handleOverlayClick}></div>
      <div className="modal-container flex items-center justify-center h-full overflow-y-auto">
        {selectedRecipe && (
          <div className="modal-content bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-2xl font-bold">{selectedRecipe.strMeal}</h2>
              <button className="modal-close text-3xl" onClick={handleClose}>&times;</button>
            </div>
            <Image
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="py-2 max-h-60 overflow-y-auto">
              <p>{selectedRecipe.strInstructions}</p>
            </div>
            <div className="flex justify-center">
              <button onClick={handleClose} className="modal-close-button bg-blue-500 hover:bg-black-400 text-white font-bold py-2 px-4 rounded">
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
