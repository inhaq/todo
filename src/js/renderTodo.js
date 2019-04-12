import {a} from '../index'
const tasks = document.querySelector('.tasks');
const task = document.createElement('table');
task.classList.add('table');
const head = document.createElement('thead');
head.classList.add('thead-light');
const row = document.createElement('tr');
const thead = document.createElement('th');
thead.classList.add('col');
thead.textContent = 'Title';
const thead2 = thead.cloneNode(true);
thead2.textContent = 'Description';
const thead3 = thead.cloneNode(true);
thead3.textContent = 'Date';
const thead4 = thead.cloneNode(true);
thead4.textContent = 'Priority';
const thead5 = thead.cloneNode(true);
thead5.textContent = 'Notes';
const thead6 = thead.cloneNode(true);
thead6.textContent = 'Done';
const thead7 = thead.cloneNode(true);
thead7.textContent = 'Edit';
const body = document.createElement('tbody');
let count = 0;
const sidebar = document.getElementById('sidebar-wrapper');
let title = document.getElementById('Title');
let desc = document.getElementById('description');
let date = document.getElementById('dueDate');
let priority = document.getElementById('priority');
let notes = document.getElementById('notes');
let done = document.getElementById('exampleCheck1')

function renderProjectsOnLoad(projects) {

  for (let i = 0; i < projects.length; i++) {
    count++;
    const topDiv = document.createElement('div');
    topDiv.classList.add('list-group', 'list-group-flush');
    topDiv.setAttribute('data-id', `${i}`);
    const newProj = document.createElement('a');
    newProj.textContent = projects[i]._name;
    newProj.classList.add('list-group-item', 'list-group-item-action', 'bg-light');
    topDiv.appendChild(newProj);
    sidebar.appendChild(topDiv);
  }
}

function renderProject() {

  const addBtn = document.querySelector('.add');
  const addProjectField = document.getElementById('addProject');

  addBtn.addEventListener('click', function () {
    const topDiv = document.createElement('div');
    topDiv.classList.add('list-group', 'list-group-flush');
    topDiv.setAttribute('data-id', `${count++}`);
    const newProj = document.createElement('a');
    newProj.classList.add('list-group-item', 'list-group-item-action', 'bg-light');

    if (addProjectField.value !== '') {
      newProj.textContent = addProjectField.value;
      topDiv.appendChild(newProj);
      sidebar.appendChild(topDiv);
    }
  })
}

function renderSingleProject() {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'dashboard') {
      document.querySelector('.project').classList.add('hide');
      document.querySelector('.tasks').classList.add('hide');
    } else if (e.target.parentNode.getAttribute('data-id')) {
      document.querySelector('.project').classList.remove('hide');
      document.querySelector('.tasks').classList.remove('hide');

    }

  })
}

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
  }
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

function renderObjectTodo(todo,i) {
  const {
    _title,
    _description,
    _dueDate,
    _priority,
    _notes,
    _checklist
  } = todo;
  if (tasks.childElementCount === 0) {
    task.appendChild(head);
    head.appendChild(row);
    row.appendChild(thead);
    row.appendChild(thead2);
    row.appendChild(thead3);
    row.appendChild(thead4);
    row.appendChild(thead5);
    row.appendChild(thead6);
    row.appendChild(thead7);
  }
  //body

  const rowBody = document.createElement('tr');
  const tdata = document.createElement('td');
  tdata.textContent = _title;
  const tdata2 = tdata.cloneNode(true);
  tdata2.textContent = _description;
  const tdata3 = tdata.cloneNode(true);
  tdata3.textContent = _dueDate;
  const tdata4 = tdata.cloneNode(true);
  tdata4.textContent = _priority;
  const tdata5 = tdata.cloneNode(true);
  tdata5.textContent = _notes;
  const tdata6 = tdata.cloneNode(true);
  const tdata7 = tdata.cloneNode(true);
  tdata7.innerHTML = `<button class="btn btn-primary" data-name=${i} data-parent=${a} data-toggle="modal" data-target="#exampleModal">Edit</button>`
  tdata6.innerHTML = toText(_checklist,i,rowBody);
  // tdata6.dataset.name = i;
  // tdata6.dataset.parent = a;
  rowBody.appendChild(tdata);
  rowBody.appendChild(tdata2);
  rowBody.appendChild(tdata3);
  rowBody.appendChild(tdata4);
  rowBody.appendChild(tdata5);
  rowBody.appendChild(tdata6);
  rowBody.appendChild(tdata7);
  body.appendChild(rowBody);
  task.appendChild(body);

  tasks.appendChild(task);
  return tasks;

}

function renderTodoTasks(project) {
  console.log(a);
   const tableBody = document.querySelector('tbody');
  if (tasks.childElementCount !== 0) {
   tableBody.innerHTML = null;
  }

  for (let i = 0; i < project._todos.length; i++) {
    renderObjectTodo(project._todos[i],i)
  }
  if(tableBody && !(tableBody.hasChildNodes())){
    
     tableBody.innerHTML = "<div>No todos yet!</div>"
  }
}

function toText(done,i,rowBody) {
  if (done) {
     rowBody.classList.add('opac')
    return `<span class='badge badge-success' data-name=${i} data-parent=${a}>Complete</span>`
  }
   rowBody.classList.remove('opac')
  return `<span class='badge badge-warning' data-name=${i} data-parent=${a}>Pending</span>`
}

  document.addEventListener('click',function(e){
  if(e.target.innerHTML === 'Save changes'){
  let newTitle = document.getElementById('new-Title').value;
  let newDescription = document.getElementById('new-description').value;
  let newdueDate = document.getElementById('new-dueDate').value;
  let newPriority = document.getElementById('new-priority').value;
  let newNotes = document.getElementById('new-notes').value;
  return{newTitle,newDescription,newdueDate,newPriority,newNotes}
  }
  })
export {
  renderProject,
  renderSingleProject,
  renderProjectsOnLoad,
  addTodo,
  resetForm,
  renderTodoTasks
};