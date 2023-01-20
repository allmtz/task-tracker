
import Todo from "./Todo"
import Doing from "./Doing"
import Done from "./Done"

// TODO 
// might be able to make Todo,doing,done one componenet and pass in the respective arrays from `boards`

export const BoardDisplay = ( {boards, focusedBoard, changeStatus, capitalizeFirstLetter, openCardWindow } ) => {
    console.log(...boards)
    return(
        <>
            <Todo
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
            />
            <Doing
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
            />
            <Done
            focusedBoard={focusedBoard}
            changeStatus={changeStatus}
            capitalizeFirstLetter={capitalizeFirstLetter}
            openCardWindow={openCardWindow}
            />
        </>
    )
}