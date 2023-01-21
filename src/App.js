// TODO 
// figure out which refs can be deleted
// define functions outside of App()
// keep defaultBoards ?
// organize
// check all components

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
// import BoardList from "./components/BoardListPopup";
// import CreateBoardBtn from "./components/CreateBoardBtn";
import Nav from "./components/Nav";
import AddCardPopup from "./components/AddCardPopup";
import CreateBoardPopup from "./components/CreateBoardPopup";
import DescriptionPopup from "./components/DescriptionPopup";

// CHANGES 
// import addTask from './assets/icon-add-task-mobile.svg'
import { EmptyBoardPrompt } from "./components/EmptyBoardPrompt";
import { BoardDisplay } from "./components/BoardDisplay";
import BoardListPopup from "./components/BoardListPopup";


export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
      let cardType = "";

  const backup = {
    title: "...There's always Netflix ?",
    todo: [],
    doing: [],
    done: [],
    key: 1,
    desc: "Don't forget Snacks !"
  };
  const defaultBoards = [
    {
      title: "Built with react",
      todo: [
        "Click Me!",
        "Add a card to any column",
        "Create a new Board with a custom title, description and subtasks",
        "View and edit any description by clicking the info icon"
      ],
      doing: [],
      done: [],
      key: 2,
      desc:'"To improve is to change; to be perfect is to change often." \n-Winston Churchill',
    },
  ];

  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem("boards");
    const initialBoards = JSON.parse(savedBoards);

    if (initialBoards === null || initialBoards.length === 0) {
      // return defaultBoards;
      return null
    }
    return initialBoards;
  });

  const [focusedBoard, setFocusedBoard] = useState(
      boards !== null ? boards[0] : null
    );

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  });

  function openCreateBoard() {
        popupWindow.current.style.display = "flex";
  }

  function focusBoard(e) {
    const id = e.target.closest(".board-list-item").id;
    const focusedBoard = boards.filter((board) => id === String(board.key))[0];

    setFocusedBoard(focusedBoard);
  }

  function addSubtask(e) {
    e.preventDefault()

    const existingSubtaskNode = document.querySelector(".subtask")
    const clonedSubtaskNode =  existingSubtaskNode.cloneNode(true)

    clonedSubtaskNode.querySelector("input").value = ""
    
    clonedSubtaskNode.lastChild.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });

    subtaskInputContainer.current.appendChild(clonedSubtaskNode)

  }

  function createTask(e) {
    e.preventDefault()
    let newBoards

    const todo = [];
    subtaskInputContainer.current.childNodes.forEach((ele) => {
      if (ele.firstChild.value === "") {
        return;
      }
      todo.push(ele.firstChild.value);
    });

    if (
      descInput.current.value.trim() === "" ||
      titleInput.current.value.trim() === ""
    ) {
      alert(
        "Please make sure the Description and Title sections are filled in"
      );
      return;
    }

    const newTask = {
      title: titleInput.current.value,
      desc: descInput.current.value,
      todo: todo,
      doing: [],
      done: [],
      key: Date.now(),
    };

    if(boards){
      newBoards = [...boards, newTask];
    }
    else{
      newBoards = [newTask]
    }

    setBoards(newBoards);
    setFocusedBoard(newBoards[newBoards.length - 1])

    closePopup();
  }

  function closePopup() {
    popupWindow.current.style.display = "none";
    addCardWindow.current.style.display = "none";
    clearPopupInputs();
  }

  function clearPopupInputs() {
    console.log("cleared inputs");
    titleInput.current.value = "";
    descInput.current.value = "";
    addCardInput.current.value = "";
    subtaskInputContainer.current.childNodes.forEach(
      (child) => (child.firstChild.value = "")
    );
  }

  function changeStatus(e) {
    const status = e.target.closest(".card").getAttribute("data-status");
    const taskClicked = e.target.closest(".card").id;
    const boardClone = [...boards];
    const updatedTodos = focusedBoard[status].filter(                   //removes the task clicked from its corresponding array(todo doing or done)
      (task) => task !== taskClicked
    );

    focusedBoard[status] = updatedTodos;                                //update the focused boards todo doing or done array

    if (status === "todo") {                                            //move the task clicked to the next status
      focusedBoard.doing.push(taskClicked);
    }

    if (status === "doing") {
      focusedBoard.done.push(taskClicked);
    }
    setBoards(boardClone);
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

  function openCardWindow(e) {
    addCardWindow.current.style.display = "flex";

    cardType = e.target.id;
  }


  function deleteBoard() {
    const wantsToDelete = window.confirm(`Are you sure you want to delete the "${focusedBoard.title}" board? This action will remove all of the columns and cannot be reversed`)
   if(wantsToDelete ){
    const indexOfDeletedTask = boards.indexOf(
      boards.find((board) => board.key === focusedBoard.key)
    );
    const updatedTasks = boards.filter(
      (board) => board.key !== focusedBoard.key
    );
  
    setBoards(updatedTasks);
  
    if (updatedTasks[indexOfDeletedTask] === undefined) {                         //sets a new focusedBoard when the current one is deleted
      if (updatedTasks[0] === undefined || updatedTasks === []) {                //if there are no boards left after deletion ==> use a backup/default board
        setFocusedBoard(backup);
      } else {                                                                  //if the board in the last position of the array is deleted ==> set the foucsedBoard to the first board in the array
        setFocusedBoard(updatedTasks[0]);
      }
    } else {                                                                    //if the index of the deleted board still exists i.e. a board in the middle of the array was deleted==> set the focusedBoard to the new element in that position
      setFocusedBoard(updatedTasks[indexOfDeletedTask]);
    }
  
    closeDescriptionPopup()
  }

  return 
  }

  function openDesc(){
    descriptionWindowRef.current.style.display = 'flex'
    descriptionBoxRef.current.value = focusedBoard.desc

  }

  function updateDescription(){
   const newDesc = descriptionBoxRef.current.value

    const boardsClone = [...boards]

    boardsClone.forEach( board => {
      if (Number(board.key) === focusedBoard.key){
        board.desc = newDesc
      }
    })
    
    setBoards(boardsClone)
  }

  function closeDescriptionPopup(){
    descriptionWindowRef.current.style.display = "none";
  }

  function openBoardList(){
    boardsListWindowRef.current.style.display = "flex"
  }

  // const createBoardBtn = useRef(null);
  const closePopupBtn = useRef(null);
  const popupWindow = useRef(null);
  const titleInput = useRef(null);
  const descInput = useRef(null);
  const addCardWindow = useRef(null);
  const addCardInput = useRef(null);
  const subtaskInputContainer = useRef(null);
  const descriptionWindowRef= useRef(null);
  const descriptionBoxRef= useRef(null);
  const boardsListWindowRef = useRef(null);

  return (
    <div className="container">
      <CreateBoardPopup
        popupWindow={popupWindow}
        closePopupBtn={closePopupBtn}
        closePopup={closePopup}
        titleInput={titleInput}
        descInput={descInput}
        subtaskInputContainer={subtaskInputContainer}
        addSubtask={addSubtask}
        createTask={createTask}
      />

      <AddCardPopup
        closePopup={closePopup}
        createCard={createCard}
        addCardInput={addCardInput}
        addCardWindow={addCardWindow}
        closePopupBtn={closePopupBtn}
      />

      <BoardListPopup
          boards={boards}
          focusBoard={focusBoard}
          boardsListWindowRef={boardsListWindowRef}
          focusedBoard={focusedBoard}
        />

      <DescriptionPopup 
        descriptionWindowRef={descriptionWindowRef} 
        descriptionBoxRef={descriptionBoxRef} 
        closeDescriptionPopup={closeDescriptionPopup} 
        deleteBoard={deleteBoard}
        updateDescription={updateDescription}
      /> 
    
      <div className="body">
        <Nav
          focusedBoard={focusedBoard}
          openDesc={openDesc}
          openCreateBoard={openCreateBoard}
          openBoardList={openBoardList}
        />
        <main>
       
          {boards === null ?  
            <EmptyBoardPrompt />
            : <BoardDisplay 
                boards={boards}
                focusedBoard={focusedBoard}
                changeStatus={changeStatus}
                capitalizeFirstLetter={capitalizeFirstLetter}
                openCardWindow={openCardWindow}
                
                />
            }

        </main>
      </div>
    </div>
  );
}

export default App;