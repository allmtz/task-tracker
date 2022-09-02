
// dead code. maybe use later refactored as a component 

function SubtaskInput( {deleteSubtask} ){
    return(
        <div>
              <input id={Date()} className="defaultInputBox" type="text" name="" placeholder="make the coffee"/>
              <button id={Date()} onClick={(e)=> deleteSubtask(e)}>X</button> 

        </div>
    )
}


export default SubtaskInput