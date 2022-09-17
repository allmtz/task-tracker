function Header({ focusedBoard, capitalizeFirstLetter, deleteBoard, openDesc }) {
  return (
    <div className="header">
      <h1>
        {focusedBoard.title
          .split(" ")
          .map((word) => capitalizeFirstLetter(word))
          .join(" ")}
      </h1>
      <i
        onClick={() => openDesc()} 
        className="icon info fa-solid fa-circle-info"
      ></i>
      <i
        onClick={() => deleteBoard()}
        className="icon trashcan fa-solid fa-trash-can"
      ></i>
    </div>
  );
}

export default Header;
