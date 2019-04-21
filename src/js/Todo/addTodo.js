const title = document.getElementById('Title');
const desc = document.getElementById('description');
const date = document.getElementById('dueDate');
const priority = document.getElementById('priority');
const notes = document.getElementById('notes');
const done = document.getElementById('exampleCheck1');

function addTodo() {
  const addTodo = document.querySelector('.add-todo');
  addTodo.addEventListener('click', collect);
  const collect = () => {
    let todo = {};
    todo.title = title.value;
    todo.desc = desc.value;
    todo.date = date.value;
    todo.priority = priority.value;
    todo.notes = notes.value;
    todo.done = done.checked;
    return todo;
  };
  return collect();
}

function resetForm() {
  title.value = '';
  date.value = '';
  priority.value = "1";
  notes.value = '';
  desc.value = '';
  done.checked = false;
}

export {resetForm, addTodo};