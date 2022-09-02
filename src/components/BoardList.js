

function BoardList( {boards,focusBoard} ){
    return(
        <div>
            <p>All Boards ({boards.length})</p>
            <ul>
                {boards.map( board => <li key={board.key}><button id={board.key} onClick={ (e)=> focusBoard(e) }>{board.title}</button></li>)}
            </ul>
        </div>
    )
}

export default BoardList