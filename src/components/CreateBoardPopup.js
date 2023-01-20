// TODO
// might not need the `id` on form elements 

function CreateBoardPopup( {popupWindow, closePopupBtn, closePopup, titleInput, descInput, subtaskInputContainer, addSubtask, createTask} ){

    return(
        <div ref={popupWindow} className="popup-container flex-center">

        <div className="add-task-card">
          <section className="add-task-header flex-between">
            <h3>Add New Task</h3>
            <button ref={closePopupBtn} onClick={(e) => closePopup(e)}>
              X
            </button>
          </section>
          <form className="add-task-form">
            <p>Title</p>
                <input
                  ref={titleInput}
                  // className="defaultInputBox"
                  type="text"
                  name="task-title"
                  id="task-title"
                  placeholder="e.g take a coffee break"
                />
                <p>Description</p>
                <textarea
                  ref={descInput}
                  // className="descInputBox"
                  placeholder="e.g. its always good to take a break"
                  name="task-description"
                  id="task-description"
                  cols="30"
                  rows="10"
                ></textarea>
                <p>Todo</p>
                <div ref={subtaskInputContainer} className="subtask-container">
                  <div className="subtask">
                    <input  type="text" />
                    <button className="delete-subtask-btn">X</button>
                  </div>
                </div>
                <button 
                  className="add-subtask-btn" 
                  onClick={(e) => addSubtask(e)}>
                    + Add New Subtask
                </button>
                <button 
                  className="create-task-btn" 
                  type="submit" 
                  onClick={(e) => createTask(e)}>
                    Create Task
                </button>
          </form>
      </div>
      </div>
    )
}


export default CreateBoardPopup