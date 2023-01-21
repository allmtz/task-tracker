import { useRef } from "react";

function AddCardPopup( {cardType, addCardWindowRef, boards, focusedBoard, setBoards} ){
  const addCardInput = useRef(null);

  function closePopup() {
    addCardWindowRef.current.style.display = "none";
    addCardInput.current.value = "";
  }

  function createCard(e) {
    e.preventDefault();
    const boardClone = [...boards];
    const taskToAdd = addCardInput.current.value;

    if (addCardInput.current.value.trim() === "") {
      alert("Fill in a task");
      return;
    }

    boardClone.forEach((board) => {
      if (board.key === focusedBoard.key) {         //finds the board thats currently being displayed
        board[cardType].push(taskToAdd);            //adds a card to the 'todo' 'doing' or 'done' array
      }
    });

    setBoards(boardClone);

    closePopup();
  }
    return(
      <div ref={addCardWindowRef} className="popup-container flex-center">
        <div className="add-card-card">
          <div className="add-card-header flex-between">
            <h3>Add New Card</h3>
            <button onClick={closePopup}>
              X
            </button>
          </div>
          <p>What's Next ?</p>
          <form className="add-card-form">
            <input
              ref={addCardInput}
              type="text"
            />
            <button className="create-card-btn" type="submit" onClick={(e) => createCard(e)}>
              Create Card
            </button>
          </form>
        </div>
      </div>
    )
}

export default AddCardPopup