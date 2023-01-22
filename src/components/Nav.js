//components
import OpenBoardCreationBtn from './OpenBoardCreationBtn'
import LightDarkToggle from './LightDarkToggle';
//images
import logo from '../assets/logo-mobile.svg'
import chevronDown from '../assets/icon-chevron-down.svg'
import verticalEllipsis from '../assets/icon-vertical-ellipsis.svg'
//functions
import { capitalizeFirstLetter } from '../App';

function Nav({ focusedBoard, openDesc, openCreateBoard, openBoardList }) {
  return (
    <nav>
      <div className="flex-between title-container">
        <img src={logo} alt="Logo" />
        { focusedBoard ? 
          <h1>
            { focusedBoard.title ? focusedBoard.title
              .split(" ")
              .map(capitalizeFirstLetter)
              .join(" ")
              : "Platform Launch"
            } 
          </h1>
          : <h1>Platform Launch</h1>
       }
      </div>
      <div className="flex-between controls-container ">
        <img 
          src={chevronDown} 
          className="chevron-down"
          alt="Switch boards button"
          onClick={ () => openBoardList()} />
        <img 
          className="vertical-ellipsis" 
          src={verticalEllipsis} 
          alt="Edit current task" 
          onClick={ () => openDesc() } />
        <OpenBoardCreationBtn 
          openCreateBoard={openCreateBoard} />
        </div>
        <LightDarkToggle />
    </nav>
  );
}

export default Nav;