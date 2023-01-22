import { capitalizeFirstLetter } from "../App"

function Doing ( {focusedBoard, changeStatus, openCardWindow } ){
    let i = 0
    return(
        <div className="doing-container">
             <div className="status-title-container">
                <div className="status-circle doing-circle"></div>
                <h2>Doing ({focusedBoard.doing.length})</h2>
            </div>
            {focusedBoard.doing.length > 0 && focusedBoard.doing.map( task=> {
                i++
                return <div id={task} className="card" data-status='doing' data-key={focusedBoard.key} onClick={(e)=> changeStatus(e)} key={i}><p>{capitalizeFirstLetter(task)}</p></div>} )}
            <button className='add-card-btn doing-add-card-btn' id="doing" onClick={(e)=>openCardWindow(e)}>+ Add Card</button>
        </div>
    )
}

export default Doing