

function Todo ( {focusedBoard} ){
    let i = 0
    return(
        <div>
            <h2>Todo({focusedBoard.subtasks.length})</h2>
            {focusedBoard.subtasks.map( subtask=> {
                i++
                return <h4 key={i}>{subtask}</h4>} )}
        </div>
    )

}


export default Todo