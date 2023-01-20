function Done ( {focusedBoard, changeStatus, capitalizeFirstLetter, openCardWindow } ){
    let i = 0
    return(
        <div className="done-container">
             <div className="status-title-container">
                <div className="status-circle done-circle"></div>
                <h2>Done ({focusedBoard.done.length})</h2>
            </div>
            {focusedBoard.done.length > 0 &&  focusedBoard.done.map( subtask=> {
                i++
                return <div id={subtask} data-status='done' data-key={focusedBoard.key} className="card" onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(subtask)}</p></div>
                
            })}
            <button className='add-card-btn done-add-card-btn' id="done" onClick={(e)=>openCardWindow(e)}>+ Add Card</button>
        </div>
    )

}


export default Done