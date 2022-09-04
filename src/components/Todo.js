

function Todo ( {focusedBoard, changeStatus, capitalizeFirstLetter, openCardWindow } ){
    let i = 0
    return(
        <div className="todo-container">
            <h2>Todo({focusedBoard.subtasks.length})</h2>
            {focusedBoard.subtasks.map( subtask=> {
                i++
                return <div id={subtask} data-status='todo' data-key={focusedBoard.key} className="card" onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(subtask)}</p></div>
                
            })}
            <button id="todo" onClick={openCardWindow}>+ Add Card</button>
        </div>
    )

}


export default Todo