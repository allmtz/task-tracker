import { useRef } from "react";

function CreateBoardPopup( { createBoardWindowRef, boards, setBoards, setFocusedBoard } ){
  const titleInputRef = useRef(null);
  const descInputRef = useRef(null);
  const subtaskInputContainerRef = useRef(null);

  function closeWindow(){
    createBoardWindowRef.current.style.display = "none"
    clearInputs()
  }

  function clearInputs(){
    titleInputRef.current.value = ""
    descInputRef.current.value = ""
    subtaskInputContainerRef.current.childNodes.forEach(
      (child) => (child.firstChild.value = "")
    );
  }

  function addSubtask(e) {
    e.preventDefault()

    const existingSubtaskNode = document.querySelector(".subtask")
    const clonedSubtaskNode =  existingSubtaskNode.cloneNode(true)

    clonedSubtaskNode.querySelector("input").value = ""
    
    clonedSubtaskNode.lastChild.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });

    subtaskInputContainerRef.current.appendChild(clonedSubtaskNode)
  }

  function createTask(e) {
    e.preventDefault()

    if(descInputRef.current.value.trim() === "" || titleInputRef.current.value.trim() === ""){
        alert(
          "Please make sure the Description and Title sections are filled in"
        );
        return;
    }

    else{
      let newBoards
      const newTask = {
        title: titleInputRef.current.value,
        desc: descInputRef.current.value,
        todo: [],
        doing: [],
        done: [],
        key: Date.now(),
      };

      subtaskInputContainerRef.current.childNodes.forEach((ele) => {
        if (ele.firstChild.value.trim() === "") {
          return;
        }
        newTask.todo.push(ele.firstChild.value);
      });

      newBoards = boards ? [...boards, newTask] : [newTask]

      setBoards(newBoards);
      setFocusedBoard(newBoards[newBoards.length - 1])

      closeWindow()
      clearInputs()
    }
  }
  return(
    <div ref={createBoardWindowRef} className="popup-container flex-center">
      <div className="add-task-card">
        <section className="add-task-header flex-between">
          <h3>Add New Task</h3>
          <div className="close-add-task-window-btn" onClick={closeWindow}>
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