// todo 
// delete button ref ?

function AddCardPopup( {closePopup,createCard, addCardInput,addCardWindow,closePopupBtn} ){
    return(
      <div ref={addCardWindow} className="popup-container flex-center">
        <div className="add-card-card">
          <div className="add-card-header flex-between">
            <h3>Add New Card</h3>
            <button ref={closePopupBtn} onClick={() => closePopup()}>
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