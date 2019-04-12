import {nameId, parentId, projects} from "../../index";
import {renderTodoTasks}            from "./renderTodo";

export default function deleteTodo() {
  document.addEventListener('click', function (e) {
    if (e.target.innerHTML === 'Delete'){
      projects[Number(parentId)]._todos.splice(Number(nameId), 1);
      renderTodoTasks(projects[Number(parentId)]);
    }
  })
}