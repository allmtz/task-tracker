
import logo from '../assets/logo-mobile.svg'
import chevronDown from '../assets/icon-chevron-down.svg'
import addTask from '../assets/icon-add-task-mobile.svg'
import veritcalEllipsis from '../assets/icon-vertical-ellipsis.svg'
import OpenBoardCreationBtn from './CreateBoardBtn'


//TODO
// rename to <Nav /> 
// clean up 

function Header({ focusedBoard, capitalizeFirstLetter, deleteBoard, openDesc, openCreateBoard, displayBoardsList, createTask }) {
  return (
    <nav>
      <div className="flex-between title-container">
        <img src={logo} alt="Logo" />

        { focusedBoard ? 
          <h1>
            { focusedBoard.title ? focusedBoard.title
              .split(" ")
              .map((word) => capitalizeFirstLetter(word))
              .join(" ")
              : "Platform Launch"
            } 
          </h1>
          : <h1>Platform Launch</h1>
       }
        <img 
          src={chevronDown} 
          className="chevron-down"
          alt="Switch boards button"
          onClick={ () => displayBoardsList()} />
      </div>
    
      <div className="flex-between controls-container ">

        {/* <img className='add-task' src={addTask} alt="Add task" /> */}
        {/* <CreateBoardBtn createBoard={createBoard} createTask={createTask} /> */}

        <OpenBoardCreationBtn openCreateBoard={openCreateBoard} />
        {/* <button 
            className='createBoardBtn add-task'
            onClick = { ()=> openCreateBoard() }>
        </button> */}

        
        {/* <img src={veritcalEllipsis} alt="Edit current task" /> */}
        <svg onClick={() => deleteBoard()} className='trashcan' width="25px" height="25px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z" />
          <path d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z" />
        </svg>

        

      </div>

      {/* <i
        onClick={() => openDesc()} 
        className="icon info fa-solid fa-circle-info"
      ></i>
      <i
        onClick={() => deleteBoard()}
        className="icon trashcan fa-solid fa-trash-can"
      ></i> */}

    </nav>
  );
}

export default Header;
