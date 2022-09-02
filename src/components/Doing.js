function Doing ( {focusedBoard} ){
    let i = 0
    return(
        <div>
            <h2>Doing({focusedBoard.doing.length})</h2>
            {focusedBoard.doing.map( subtask=> {
                i++
                return <h4 key={i}>{subtask}</h4>} )}
        </div>
    )

}


export default Doing