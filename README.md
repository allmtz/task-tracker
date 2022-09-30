# A Kanban style task tracking app built with React

## How to use
* Click on the "+Create New Board" button to create a custom board
* Add a title, optional description and optional subtasks to the board
* If no subtasks were added during board creation, you can add a subtask to any column by clicking the "+Add Card" button 
* Click on any subtask to change its status 
* Edit the board description by clicking the info button next to the board title
* Feel free you close the window, the app will remeber your tasks until you come back!

## How it works
* React's useState hook is used to create a stateful boards array which is filled with board objects
* Each board object contains the information of that given board (subtasks, title, desciption)
* To handle any changes to the boards (creating a new board, changing the status of a subtask, deleting a board, changing the description etc.), a local copy of the boards array is made then modified
* The modified boards are then passed into the setState function to re-render the page with the updated boards
* Anytime the boards array changes, useEffect saves a copy of the new array to localStorage
* Skills: ES6, destructuring assignment, spread syntax, array methods (forEach, slice, find, indexOf), ternary operator, short-circuit evaluation, object manipulation, scope, React hooks (useState, useEffect, useRef), CSS, custom CSS properties, Flexbox, React components


## [Live Demo](https://task-tracker-9966c.web.app/)
