import './App.css';
import React, { useRef, useState } from 'react'
import BoardList from './components/BoardList';
import CreateBoardBtn from './components/CreateBoardBtn';
import Todo from './components/Todo';
import Doing from './components/Doing';
import Done from './components/Done';


import SubtaskInput from './components/SubtaskInput';


function App() {
  const [boards, setBoards] = useState([{
      'title' : 'Shop',
      'subtasks':['go to store','get cereal','get beer','buy toothpaste'],
      'doing': ['homework','project 2'],
      'done': ['shopping','planning'],
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
      'subtasks':['sourdough','turkey','sharp ched','heirloom tom', 'avo','s&p'],
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

    // clearPopupInputs()   
  }

  function closePopup(){
    popupWindow.current.style.display = 'none'
    clearPopupInputs()
  }

  function clearPopupInputs(){
    console.log('cleared inputs')
    titleInput.current.value= ''
    descInput.current.value= ''
    // subtaskInput.current.value= ''   //rewrite clear function
  }

  // TODOD implement useRef
  const createBoardBtn = useRef(null) //might not need
  const closePopupBtn = useRef(null)  //might not need
  const popupWindow = useRef(null)
  const titleInput = useRef(null)  
  const descInput = useRef(null) 

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
              <div className='subInput-close'><input className='defaultInputBox' type='text'  /> <button className='deleteSubtaskBtn'>X</button></div>
              {/* <input ref={subtaskInput} className="defaultInputBox" type="text" name="" id="" placeholder="make the coffee"/>  */}
              {/* <SubtaskInput deleteSubtask={deleteSubtask} /> */}
            </div>
            <button  onClick={()=> addSubtask() } >+ Add New Subtask</button>
            <button type='submit' onClick={ () => createTask() }>Create Task</button>
        </div>
      </div>
      
      <div className="sidebar">
        <h1>sidebar</h1>
        <BoardList boards = {boards} focusBoard={focusBoard} />
        <CreateBoardBtn crerateBoardBtn={createBoardBtn} createBoard= {createBoard}/>
      </div>

      <div className="body">
        <div className="header">
          <h1>Platform Launch</h1>
          {/* <AddTaskBtn /> */}
        </div>
        <div className="main">
           <Todo  focusedBoard={focusedBoard} />
           <Doing focusedBoard={focusedBoard} />
           <Done  focusedBoard={focusedBoard}/>
           {/* <AddColumn />  */}

          
          </div>
      </div>

    </div>
  );
  
}

export default App;
