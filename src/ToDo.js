import React from "react";
import "./App.css";

function ToDo() {
  
  return (
       <div>
<html>
  <head>
    <title>To-Do List App</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>To-Do List</h1>
      <div class="input-container">
        <input type="text" id="taskInput" placeholder="Enter task..." />
        <input type="date" id="deadlineInput" placeholder="" />

        <button id="addButton">Add</button>
      </div>
      <div class="todo-list" id="todoList">
        High Priority Tasks:
        <div id="highPriorityContainer">
        </div>

        Low Priority Tasks:
        <div id="lowPriorityContainer">
        </div>
      </div>
    </div>
        <script src="ToDoJs.js"></script>
    </body>
    </html>

       </div>
  );
}

export default ToDo;
