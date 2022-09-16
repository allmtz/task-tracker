function Header({ focusedBoard, capitalizeFirstLetter, deleteBoard }) {
  return (
    <div className="header">
      <h1>
        {focusedBoard.title
          .split(" ")
          .map((word) => capitalizeFirstLetter(word))
          .join(" ")}
      </h1>
      <i
        onClick={() => deleteBoard()}
        className="trashcan fa-solid fa-trash-can"
      ></i>
    </div>
  );
}

export default Header;
