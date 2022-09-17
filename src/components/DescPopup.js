function DescPopup({descWindow, editDescBox, closeDescPopup}){
    return(
        <div className="desc-container" ref={descWindow}>
        <div className="desc-card">
          <h2>Description</h2>
          <textarea ref={editDescBox}  className="edit-desc-box" cols="30" rows="10"></textarea>
          <button onClick={() => closeDescPopup()}>Close</button>

        </div>
      </div>


    )
}

export default DescPopup