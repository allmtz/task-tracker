function Doing ( {focusedBoard, changeStatus, capitalizeFirstLetter, openCardWindow } ){
    let i = 0
    return(
        <div className="doing-container">
            <h2>Doing({focusedBoard.doing.length})</h2>
            {focusedBoard.doing.map( task=> {
                i++
                return <div id={task} className="card" data-status='doing' data-key={focusedBoard.key} onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(task)}</p></div>} )}
            <button id="doing" onClick={(e)=>openCardWindow(e)}>+ Add Card</button>

        </div>
    )

}


export default Doing