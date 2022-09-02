function Done ( {focusedBoard} ){
    let i = 0
    return(
        <div>
            <h2>Done({focusedBoard.done.length})</h2>
            {focusedBoard.done.map( subtask=> {
                i++
                return <h4 key={i}>{subtask}</h4>} )}
        </div>
    )

}


export default Done