function CreateBoardPopup( {popupWindowRef, closePopup, titleInputRef, descInputRef, subtaskInputContainerRef, addSubtask, createTask} ){

    return(
      <div ref={popupWindowRef} className="popup-container flex-center">
        <div className="add-task-card">
          <section className="add-task-header flex-between">
            <h3>Add New Task</h3>
            <div className="close-add-task-window-btn" onClick={(e) => closePopup(e)}>
              X
            </div>
          </section>
          <form className="add-task-form">
            <p>Title</p>
                <input
                  ref={titleInputRef}
                  type="text"
                  name="task-title"
                  id="task-title"
                  placeholder="e.g take a coffee break"
                />
                <p>Description</p>
                <textarea
                  ref={descInputRef}
                  placeholder="e.g. its always good to take a break"
                  name="task-description"
                  id="task-description"
                  cols="30"
                  rows="10"
                ></textarea>
                <p>Todo</p>
                <div ref={subtaskInputContainerRef} className="subtask-container">
                  <div className="subtask">
                    <input  type="text" />
                    <div className="delete-subtask-btn">X</div>
                  </div>
                </div>
                <div 
                  className="add-subtask-btn" 
                  onClick={(e) => addSubtask(e)}>
                      + Add New Subtask
                </div>
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