import {nameId, parentId, projects} from "../../index";
import {renderTodoTasks}            from "./renderTodo";

export default function updateTodo() {
  document.addEventListener('click', function (e) {
    let newTitle = document.getElementById('new-Title').value;
    let newDescription = document.getElementById('new-description').value;
    let newdueDate = document.getElementById('new-dueDate').value;
    let newPriority = document.getElementById('new-priority').value;
    let newNotes = document.getElementById('new-notes').value;

    if (e.target.innerHTML === 'Save changes' && newTitle !== ""){
      projects[Number(parentId)]._todos[Number(nameId)].edit(newTitle, newDescription, newdueDate, newPriority, newNotes);
      renderTodoTasks(projects[Number(parentId)]);
    }
  });
}