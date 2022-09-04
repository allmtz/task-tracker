function Doing ( {focusedBoard, changeStatus, capitalizeFirstLetter } ){
    let i = 0
    return(
        <div className="doing-container">
            <h2>Doing({focusedBoard.doing.length})</h2>
            {focusedBoard.doing.map( task=> {
                i++
                return <div id={task} className="card" data-status='doing' data-key={focusedBoard.key} onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(task)}</p></div>} )}
        </div>
    )

}


export default Doing