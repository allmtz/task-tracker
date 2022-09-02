

function CreateBoardBtn( {createBoard,createBoardBtn} ){
    return(
        <button className='createBoardBtn' ref={createBoardBtn} onClick = { ()=> createBoard() }>+Create New Board</button>
    )
}

export default CreateBoardBtn