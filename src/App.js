import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import BoardList from './components/BoardList';
import CreateBoardBtn from './components/CreateBoardBtn';
import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';


import SubtaskInput from './components/SubtaskInput';


function App() {
  
  let cardType = ''

  const backup = {
      'title': "...There's always netflix ?",
      'subtasks':[],
      'doing': [],
      'done': [],
      'key': 1,

  }


  const [boards, setBoards] = useState( [{
      'title' : 'finish',
      'subtasks': [
        'style','add desc button',
        'componetize?','lint errors'
    ],
      'doing': [
        'homework','project 2'
      ],
      'done': [
        'close popups on submit',
      ],
      'key': 1,

    },
    {
      'title' : 'study',
      'subtasks':['react','quiz friday','get beer','all nighter'],
      'doing': ['hooks','usestate','useeffect','es6','callbacks'],
      'done': ['flex','box','popup'],
      'key': 2,
    },
    {
      'title' : 'make a sandwich',
      'subtasks':['sourdough','turkey','sharp ched','heirloom tom', 'avo','s&P'],
      'doing': ['buying bread'],
      'done': ['buying avo'],
      'key': 3,
    }
  ])
  
  const[focusedBoard, setFocusedBoard] = useState(boards[0])
  

  function createBoard(){
    console.log('created board')
    popupWindow.current.style.display = 'flex'
    clearPopupInputs()

  }

  function focusBoard(e){
    
    const id = e.target.id
    const focusedBoard = boards.filter(board => id === String(board.key))[0]


    setFocusedBoard(focusedBoard)
    console.log('focused')
    
    
    


  }


  function deleteSubtask(e){
    console.log('deleted the subtask')
    console.log(e.target.parentNode.remove())
  }

  function addSubtask(){
    subtaskInputContainer.current.innerHTML +=  "<div class='subInput-close'><input class='defaultInputBox' type='text'  /> <button class='deleteSubtaskBtn'>X</button></div>"
    subtaskInputContainer.current.childNodes.forEach(ele => {
      ele.lastChild.addEventListener('click', (e)=>{e.target.parentNode.remove()} )
    })

  }


  function createTask(){
    // console.log('created task')
    const subtasks = []
    subtaskInputContainer.current.childNodes.forEach(ele => {
      if(ele.firstChild.value === ''){
        return
      }
      subtasks.push(ele.firstChild.value)
    })

    console.log(subtasks)


    const newTask = 
      {
        'title' : titleInput.current.value,
        'desc': descInput.current.value,
        'subtasks': subtasks,
        'doing': [],
        'done': [],
        'key': Date.now(),
    
      }
    

    const newBoards = [...boards,newTask]

    setBoards(newBoards)

    closePopup()
  }

  function closePopup(){
    popupWindow.current.style.display = 'none'
    addCardWindow.current.style.display = 'none'
    clearPopupInputs()
  }

  function clearPopupInputs(){
    console.log('cleared inputs')
    titleInput.current.value= ''
    descInput.current.value= ''
    addCardInput.current.value = ''
    subtaskInputContainer.current.childNodes.forEach(child => child.firstChild.value = '')
  }

  function changeStatus(e){

    const status = e.target.closest('.card').getAttribute('data-status')
    const taskClicked = e.target.closest('.card').id
    const objectID = e.target.closest('.card').getAttribute('data-key')
    const boardClone = [...boards]

    // console.log(taskClicked, objectID, status)

    if(status === 'todo'){
      const updatedTodos = focusedBoard.subtasks.filter(task => task !== taskClicked)
          
      boardClone.forEach(board => {
        if(board.key == objectID){
          board.subtasks = updatedTodos
          board.doing.push(taskClicked)
        }

      })

    setBoards(boardClone)

    }

    if(status === 'doing'){
      const updatedTodos = focusedBoard.doing.filter(task => task !== taskClicked)
          
      boardClone.forEach(board => {
        if(board.key == objectID){
          board.doing = updatedTodos
          board.done.push(taskClicked)
        }

      })

    setBoards(boardClone)

    }

    if(status === 'done'){
      const updatedTodos = focusedBoard.done.filter(task => task !== taskClicked)
          
      boardClone.forEach(board => {
        if(board.key == objectID){
          board.done = updatedTodos
        }

      })

      setBoards(boardClone)

    }

  }

  function createCard(){
    console.log('added card')
    console.log(cardType)
    const boardClone=[...boards]

    if(cardType == 'todo'){
      const taskToAdd = addCardInput.current.value

      boardClone.forEach(board => {
        if(board.key == focusedBoard.key){
          board.subtasks.push(taskToAdd)
        }
      })

      setBoards(boardClone)
    }

    if(cardType == 'doing'){
      const taskToAdd = addCardInput.current.value

      boardClone.forEach(board => {
        if(board.key == focusedBoard.key){
          board.doing.push(taskToAdd)
        }
      })

      setBoards(boardClone)
    }

    if(cardType == 'done'){
      const taskToAdd = addCardInput.current.value

      boardClone.forEach(board => {
        if(board.key == focusedBoard.key){
          board.done.push(taskToAdd)
        }
      })

      setBoards(boardClone)
    }
    closePopup()
  }

  function openCardWindow(e){
    addCardWindow.current.style.display='flex'

    cardType = e.target.id
  }

  function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function deleteBoard(){
    const indexOfDeletedTask = boards.indexOf(boards.find(board => board.key == focusedBoard.key))
    const updatedTasks = boards.filter(board => board.key != focusedBoard.key)
    
    setBoards(updatedTasks)

    if(updatedTasks[indexOfDeletedTask + 1] === undefined){
      if(updatedTasks[0] === undefined || updatedTasks === []){
        setFocusedBoard(backup)
      }
      else{setFocusedBoard(updatedTasks[0])}
    }
    else{
      setFocusedBoard(updatedTasks[indexOfDeletedTask + 1])
    }

  }
  // TODOD implement useRef
  const createBoardBtn = useRef(null) //might not need
  const closePopupBtn = useRef(null)  //might not need
  const popupWindow = useRef(null)
  const titleInput = useRef(null)  
  const descInput = useRef(null) 
  const addCardWindow = useRef(null)
  const addCardInput = useRef(null)

  const subtaskInput = useRef(null)   
  const subtaskInputContainer = useRef(null)

  

  return (
    <div className="container">
      <div ref={popupWindow} className="popupContainer">
        <div className="addTaskWindow">
          <div className='popupHeader'>
            <h3>Add New Task</h3>
            <button ref={closePopupBtn} onClick={()=>closePopup()}>X</button>
          </div>
            <p>Title</p>
            <input ref={titleInput} className='defaultInputBox' type="text" name="" id="" placeholder='e.g take a coffee break'/>
            <p>Description</p>
            <textarea ref={descInput} className='descInputBox'  placeholder='e.g. its always good to take a break' name="" id="" cols="30" rows="10"></textarea>
            <p>Subtasks</p>
            <div ref={subtaskInputContainer} className="subtaskContainer">
              <div className='subInput-close'>
                <input className='defaultInputBox' type='text'  />
                <button className='deleteSubtaskBtn'>X</button>
              </div>
              {/* <input ref={subtaskInput} className="defaultInputBox" type="text" name="" id="" placeholder="make the coffee"/>  */}
              {/* <SubtaskInput deleteSubtask={deleteSubtask} /> */}
            </div>
            <button  onClick={()=> addSubtask() } >+ Add New Subtask</button>
            <button type='submit' onClick={ () => createTask() }>Create Task</button>
        </div>
      </div>

      <div ref={addCardWindow} className="add-card-container">
        <div className="add-card-window">
          <div className='add-card-header'>
            <h3>Add New Card</h3>
            <button ref={closePopupBtn} onClick={()=>closePopup()}>X</button>
          </div>
            <p>What's Next ?</p>
            <div className="subtaskContainer">
              <div className='subInput-close'>
                <input ref={addCardInput} className='defaultInputBox' type='text'  /></div>
            </div>
            <button type='submit' onClick={ () => createCard() }>Create Card</button>
        </div>
      </div>

      <div className="sidebar">
        <h1>sidebar</h1>
        <BoardList boards = {boards} focusBoard={focusBoard} />
        <CreateBoardBtn crerateBoardBtn={createBoardBtn} createBoard= {createBoard}/>
      </div>

      <div className="body">
        <div className="header">
          <h1>{ focusedBoard.title.split(' ').map(word=>capitalizeFirstLetter(word)).join(' ') }</h1>
          <button onClick={ ()=>deleteBoard() }>Delete Board</button>
        </div>
        <div className="main">
           <Todo  focusedBoard={focusedBoard} changeStatus={changeStatus} capitalizeFirstLetter={capitalizeFirstLetter} openCardWindow={openCardWindow} />
           <Doing focusedBoard={focusedBoard} changeStatus={changeStatus} capitalizeFirstLetter={capitalizeFirstLetter} openCardWindow={openCardWindow} />
           <Done  focusedBoard={focusedBoard} changeStatus={changeStatus} capitalizeFirstLetter={capitalizeFirstLetter} openCardWindow={openCardWindow} />
           {/* <AddColumn />  */}

          
          </div>
      </div>

    </div>
  );
  
}

export default App;
