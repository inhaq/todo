import {dataId} from '../../index'

const tasks = document.querySelector('.tasks');
const task = document.createElement('table');
task.classList.add('table');
const head = document.createElement('thead');
head.classList.add('thead-light');
const row = document.createElement('tr');
const thead = document.createElement('th');
thead.classList.add('col');
const thead2 = thead.cloneNode(true);
const thead3 = thead.cloneNode(true);
const thead4 = thead.cloneNode(true);
const thead5 = thead.cloneNode(true);
const thead6 = thead.cloneNode(true);
const thead7 = thead.cloneNode(true);
const thead8 = thead.cloneNode(true);
thead.textContent = 'Title';
thead2.textContent = 'Description';
thead3.textContent = 'Date';
thead4.textContent = 'Priority';
thead5.textContent = 'Notes';
thead6.textContent = 'Done';
thead7.textContent = 'Edit';
thead8.textContent = 'Delete';

const body = document.createElement('tbody');
function renderObjectTodo(todo, i) {
  const {
    _title,
    _description,
    _dueDate,
    _priority,
    _notes,
    _checklist
  } = todo;

  if (tasks.childElementCount === 0){
    task.appendChild(head);
    head.appendChild(row);
    row.appendChild(thead);
    row.appendChild(thead2);
    row.appendChild(thead3);
    row.appendChild(thead4);
    row.appendChild(thead5);
    row.appendChild(thead6);
    row.appendChild(thead7);
    row.appendChild(thead8);
  }
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
  const tdata8 = tdata.cloneNode(true);
  tdata8.innerHTML = `<button class="btn btn-warning" data-name=${i} data-parent=${dataId}>Delete</button>`;
  tdata7.innerHTML = `<button class="btn btn-primary" data-name=${i} data-parent=${dataId} data-toggle="modal" data-target="#exampleModal">Edit</button>`;
  tdata6.innerHTML = toText(_checklist, i, rowBody);
  rowBody.appendChild(tdata);
  rowBody.appendChild(tdata2);
  rowBody.appendChild(tdata3);
  rowBody.appendChild(tdata4);
  rowBody.appendChild(tdata5);
  rowBody.appendChild(tdata6);
  rowBody.appendChild(tdata7);
  rowBody.appendChild(tdata8);
  body.appendChild(rowBody);
  task.appendChild(body);
  tasks.appendChild(task);
  return tasks;
}

function renderTodoTasks(project) {
  const tableBody = document.querySelector('tbody');
  if (tasks.childElementCount !== 0){
    tableBody.innerHTML = null;
  }
  for (let i = 0; i < project._todos.length; i++) {
    renderObjectTodo(project._todos[i], i)
  }
  if (tableBody && !(tableBody.hasChildNodes())){
    tableBody.innerHTML = "<div>No todos yet!</div>"
  }
}

function toText(done, i, rowBody) {
  if (done){
    rowBody.classList.add('opac');
    return `<span class='badge badge-success' data-name=${i} data-parent=${dataId}>Complete</span>`
  }
  rowBody.classList.remove('opac');
  return `<span class='badge badge-warning' data-name=${i} data-parent=${dataId}>Pending</span>`
}

export {renderTodoTasks};