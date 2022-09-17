function CreateBoardPopup( {popupWindow, closePopupBtn, closePopup, titleInput, descInput, subtaskInputContainer, addSubtask, createTask} ){

    return(
        <div ref={popupWindow} className="popupContainer">
        <div className="addTaskWindow">
          <div className="popupHeader">
            <h3>Add New Task</h3>
            <button ref={closePopupBtn} onClick={() => closePopup()}>
              X
            </button>
          </div>
          <p>Title</p>
              <input
                ref={titleInput}
                className="defaultInputBox"
                type="text"
                name=""
                id=""
                placeholder="e.g take a coffee break"
              />
              <p>Description</p>
              <textarea
                ref={descInput}
                className="descInputBox"
                placeholder="e.g. its always good to take a break"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <p>todo</p>
              <div ref={subtaskInputContainer} className="subtaskContainer">
                <div className="subInput-close">
                  <input className="defaultInputBox" type="text" />
                  <button className="deleteSubtaskBtn">X</button>
                </div>
              </div>
                <button onClick={() => addSubtask()}>+ Add New Subtask</button>
                <button type="submit" onClick={() => createTask()}>
                  Create Task
                </button>
        </div>
      </div>
        

    )
}


export default CreateBoardPopup