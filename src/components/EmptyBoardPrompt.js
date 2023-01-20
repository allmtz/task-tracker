import addTask from '../assets/icon-add-task-mobile.svg'

// TODO
// figure out what to do with the "add column" button. Make it "add task" ?

export const EmptyBoardPrompt = ( ) => {
    return(
      <div className="empty-board-styling">
        <div className="empty-board-prompt">
            <p>This board is empty. Create a new column to
              get started.
            </p>
            <div 
              className="add-column"
              onClick={ () => {
                console.log("click")
              } }>
              <img src={addTask} alt="Add column button" />
              <p>Add New Column</p>
            </div>
          </div> 
      </div>
    )
}