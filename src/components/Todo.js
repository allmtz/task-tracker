import { capitalizeFirstLetter } from "../App"

function Todo ( {focusedBoard, changeStatus, openCardWindow } ){
    let i = 0
    return(
        <div className="todo-container">
            <div className="status-title-container">
                <div className="status-circle todo-circle"></div>
                <h2>Todo ({focusedBoard.todo.length})</h2>
            </div>
            {focusedBoard.todo.map( subtask => {
                i++
                return <div key={i} id={subtask} data-status='todo' data-key={focusedBoard.key} className="card" onClick={(e)=> changeStatus(e)} ><p>{capitalizeFirstLetter(subtask)}</p></div>
                
            })}
            <button className='add-card-btn todo-add-card-btn' id="todo" onClick={(e)=>openCardWindow(e)}>+ Add Card</button>
        </div>
    )
}

export default Todo