function AddCardPopup( {closePopup,createCard, addCardInput,addCardWindow,closePopupBtn} ){
    return(
        <div ref={addCardWindow} className="add-card-container">
        <div className="add-card-window">
          <div className="add-card-header">
            <h3>Add New Card</h3>
            <button ref={closePopupBtn} onClick={() => closePopup()}>
              X
            </button>
          </div>
          <p>What's Next ?</p>
          <form>
              <div className="subtaskContainer">
                <div className="subInput-close">
                  <input
                    ref={addCardInput}
                    className="defaultInputBox"
                    type="text"
                  />
                </div>
              </div>
              <button type="submit" onClick={(e) => createCard(e)}>
                Create Card
              </button>
            </form>
          </div>
      </div>
        
    )
}

export default AddCardPopup