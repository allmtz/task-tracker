function DescriptionPopup({descriptionWindowRef, descriptionBoxRef, closeDescriptionPopup, deleteBoard, updateDescription}){
    return(
      <div ref={descriptionWindowRef} className="popup-container flex-center">
            <div className="desc-card">
              <div className="desc-card-header">
                <h2>Task Description</h2>
                <p onClick={closeDescriptionPopup}>X</p>
              </div>
              <textarea ref={descriptionBoxRef} onChange={updateDescription} className="edit-desc-box" cols="30" rows="10"></textarea>
              <button className="close-desc-popup-btn delete-board-btn" onClick={deleteBoard}>Delete Task</button>
            </div>
      </div>
    )
}

export default DescriptionPopup