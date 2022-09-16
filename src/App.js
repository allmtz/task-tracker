import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import BoardList from "./components/BoardList";
import CreateBoardBtn from "./components/CreateBoardBtn";
import Todo from "./components/Todo";
import Doing from "./components/Doing";
import Done from "./components/Done";
import Header from "./components/Header";
import AddCardPopup from "./AddCardPopup";
import CreateBoardPopup from "./components/CreateBoardPopup";

function App() {
  let cardType = "";

  const backup = {
    title: "...There's always netflix ?",
    subtasks: [],
    doing: [],
    done: [],
    key: 1,
  };
  const defaultBoards = [
    {
      title: "finish",
      subtasks: ["style", "add desc button", "componetize?", "form submisson"],
      doing: ["homework", "project 2"],
      done: [
        "close popups on submit",
        "lint errors",
        "form validation",
        "local storage",
      ],
      key: 1,
    },
  ];

  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem("boards");
    const initialBoards = JSON.parse(savedBoards);

    if (initialBoards.length === 0) {
      return defaultBoards;
    } else {
      return initialBoards;
    }
  });

  const [focusedBoard, setFocusedBoard] = useState(boards[0]);

  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  });

  function createBoard() {
    console.log("created board");
    popupWindow.current.style.display = "flex";
    clearPopupInputs();
  }

  function focusBoard(e) {
    const id = e.target.id;
    const focusedBoard = boards.filter((board) => id === String(board.key))[0];

    setFocusedBoard(focusedBoard);
    console.log("focused");
  }

  function addSubtask() {
    subtaskInputContainer.current.innerHTML +=
      "<div class='subInput-close'><input class='defaultInputBox' type='text'  /> <button class='deleteSubtaskBtn'>X</button></div>";
    subtaskInputContainer.current.childNodes.forEach((ele) => {
      ele.lastChild.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
  }

  function createTask() {
    const subtasks = [];
    subtaskInputContainer.current.childNodes.forEach((ele) => {
      if (ele.firstChild.value === "") {
        return;
      }
      subtasks.push(ele.firstChild.value);
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
      subtasks: subtasks,
      doing: [],
      done: [],
      key: Date.now(),
    };

    const newBoards = [...boards, newTask];

    setBoards(newBoards);

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
    const objectID = e.target.closest(".card").getAttribute("data-key");
    const boardClone = [...boards];

    if (status === "todo") {
      const updatedTodos = focusedBoard.subtasks.filter(
        (task) => task !== taskClicked
      );

      boardClone.forEach((board) => {
        if (board.key === Number(objectID)) {
          board.subtasks = updatedTodos;
          board.doing.push(taskClicked);
        }
      });

      setBoards(boardClone);
    }

    if (status === "doing") {
      const updatedTodos = focusedBoard.doing.filter(
        (task) => task !== taskClicked
      );

      boardClone.forEach((board) => {
        if (board.key === Number(objectID)) {
          board.doing = updatedTodos;
          board.done.push(taskClicked);
        }
      });

      setBoards(boardClone);
    }

    if (status === "done") {
      const updatedTodos = focusedBoard.done.filter(
        (task) => task !== taskClicked
      );

      boardClone.forEach((board) => {
        if (board.key === Number(objectID)) {
          board.done = updatedTodos;
        }
      });

      setBoards(boardClone);
    }
  }

  function createCard(e) {
    e.preventDefault();
    const boardClone = [...boards];

    if (addCardInput.current.value.trim() === "") {
      alert("Fill in a task");
      return;
    }

    if (cardType === "todo") {
      const taskToAdd = addCardInput.current.value;

      boardClone.forEach((board) => {
        if (board.key === focusedBoard.key) {
          board.subtasks.push(taskToAdd);
        }
      });

      setBoards(boardClone);
    }

    if (cardType === "doing") {
      const taskToAdd = addCardInput.current.value;

      boardClone.forEach((board) => {
        if (board.key === focusedBoard.key) {
          board.doing.push(taskToAdd);
        }
      });

      setBoards(boardClone);
    }

    if (cardType === "done") {
      const taskToAdd = addCardInput.current.value;

      boardClone.forEach((board) => {
        if (board.key === focusedBoard.key) {
          board.done.push(taskToAdd);
        }
      });

      setBoards(boardClone);
    }
    closePopup();
  }

  function openCardWindow(e) {
    addCardWindow.current.style.display = "flex";

    cardType = e.target.id;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function deleteBoard() {
    const indexOfDeletedTask = boards.indexOf(
      boards.find((board) => board.key === focusedBoard.key)
    );
    const updatedTasks = boards.filter(
      (board) => board.key !== focusedBoard.key
    );

    setBoards(updatedTasks);

    if (updatedTasks[indexOfDeletedTask + 1] === undefined) {
      if (updatedTasks[0] === undefined || updatedTasks === []) {
        setFocusedBoard(backup);
      } else {
        setFocusedBoard(updatedTasks[0]);
      }
    } else {
      setFocusedBoard(updatedTasks[indexOfDeletedTask + 1]);
    }
  }

  const createBoardBtn = useRef(null);
  const closePopupBtn = useRef(null);
  const popupWindow = useRef(null);
  const titleInput = useRef(null);
  const descInput = useRef(null);
  const addCardWindow = useRef(null);
  const addCardInput = useRef(null);
  const subtaskInputContainer = useRef(null);

  return (
    // popupWindow, closePopupBtn, titleInput, descInput, subtaskInputContainer, addSubtask, createTask
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

      <div className="sidebar">
        <BoardList
          boards={boards}
          focusBoard={focusBoard}
          capitalizeFirstLetter={capitalizeFirstLetter}
        />
        <CreateBoardBtn
          crerateBoardBtn={createBoardBtn}
          createBoard={createBoard}
        />
      </div>

      <div className="body">
        <Header
          focusedBoard={focusedBoard}
          capitalizeFirstLetter={capitalizeFirstLetter}
          deleteBoard={deleteBoard}
        />
        <div className="main">
          <Todo
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
          />
          <Doing
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
          />
          <Done
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
