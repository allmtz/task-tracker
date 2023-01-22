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