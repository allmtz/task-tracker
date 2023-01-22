
import Todo from "./Todo"
import Doing from "./Doing"
import Done from "./Done"

 const BoardDisplay = ( { focusedBoard, changeStatus, openCardWindow } ) => {
    // console.log(...boards)
    return(
        <>
            <Todo
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            openCardWindow={openCardWindow}
            />
            <Doing
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            openCardWindow={openCardWindow}
            />
            <Done
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            openCardWindow={openCardWindow}
            />
        </>
    )
}

export default BoardDisplay