// TODO 
// change capitalizeFirstLetter() to some kind of formatTitle() 

//images
import boardsImg from "../assets/icon-board.svg"
//functions
import { capitalizeFirstLetter } from '../App';

function BoardListPopup( {boards, focusBoard, boardsListWindowRef, focusedBoard }){
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
                                onClick={focusBoard}
                            >
                                <div className="item-contents">
                                    <img src={boardsImg} alt="logo" />
                                    <p className="board-list-title-container">
                                        {capitalizeFirstLetter(board.title) }
                                    </p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default BoardListPopup