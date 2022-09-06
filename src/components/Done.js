function Done ( {focusedBoard, changeStatus, capitalizeFirstLetter, openCardWindow } ){
    let i = 0
    return(
        <div className="todo-container">
            <h2>Done({focusedBoard.done.length})</h2>
            {focusedBoard.done.map( subtask=> {
                i++
                return <div id={subtask} data-status='done' data-key={focusedBoard.key} className="card" onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(subtask)}</p></div>
                
            })}
            <button id="done" onClick={(e)=>openCardWindow(e)}>+ Add Card</button>
        </div>
    )

}


export default Done