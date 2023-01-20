// todo
// think i can delete createBoardBtn ref  DONE
// rename createBoard --> it opens the popup window DONE: might delete this component altogether

function OpenBoardCreationBtn( {openCreateBoard} ){
    return(
        <button 
            className='create-board-btn add-task'
            onClick = { ()=> openCreateBoard() }>
                {/* text is set by CSS depending on screen size */}
        </button>
    )
}

export default OpenBoardCreationBtn