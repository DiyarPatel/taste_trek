// Modal.js
const Modal = ({ recipe, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
