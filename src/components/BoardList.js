

function BoardList( {boards,focusBoard, capitalizeFirstLetter} ){
    return(
        <div>
            <p>All Boards ({boards.length})</p>
            <ul>
                {boards.map( board => <li key={board.key}><button className="board-btn" id={board.key} onClick={ (e)=> focusBoard(e) }>  {capitalizeFirstLetter(board.title) }</button></li>)}
            </ul>
        </div>
    )
}

export default BoardList