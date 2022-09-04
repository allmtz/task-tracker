function Done ( {focusedBoard, changeStatus, capitalizeFirstLetter } ){
    let i = 0
    return(
        <div className="done-container">
            <h2>Done({focusedBoard.done.length})</h2>
            {focusedBoard.done.map( subtask=> {
                i++
                return <div id={subtask} data-key={focusedBoard.key} data-status='done' className="card" onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(subtask)}</p></div>} )}
        </div>
    )

}


export default Done