// TODO 
// change capitalizeFirstLetter() to some kind of fomatTitle() 

import boardsImg from "../assets/icon-board.svg"
import { LightDarkToggle } from "./LightDarkToggle"

function BoardList( {boards, focusBoard, capitalizeFirstLetter, boardsListWindowRef, focusedBoard }){
    return(
        <div ref={boardsListWindowRef} className="popup-container flex-center" >
            <div className="boards-list-card">
                <div className="boards-list-card-header flex-between">
                    <p>
                        All Boards ({boards ? boards.length : 0})
                    </p>
                    <div className="close-popup" onClick={() => boardsListWindowRef.current.style.display = "none"}>
                        X
                    </div>
                </div>
                <ul className="board-list">
                    {boards && 
                        boards.map( board => 
                            <li 
                                className={ focusedBoard.key === board.key ? "board-list-item focused" : "board-list-item "  } 
                                key={board.key}
                                id={board.key}
                                onClick={ (e)=> focusBoard(e) }
                            >
                                <div className="item-contents">
                                    <img src={boardsImg} alt="" />
                                    <p>
                                        {capitalizeFirstLetter(board.title) }
                                    </p>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <LightDarkToggle />
            </div>
        </div>
    )
}

export default BoardList