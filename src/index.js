import './scss/style.scss';
import 'bootstrap';
import AddProject                                                 from './js/Project/addProject';
import deleteTodo                                                 from './js/Todo/deleteTodo';
import {renderTodoTasks}                                          from './js/Todo/renderTodo';
import CreateTodo                                                 from './js/Todo/createTodo';
import updateTodo                                                 from './js/Todo/updateTodo'
import {renderProject, renderProjectsOnLoad, renderSingleProject} from "./js/Project/renderProject";
import {addTodo, resetForm}                                       from "./js/Todo/addTodo";


updateTodo();
renderSingleProject();
renderProject();

export let projects = [new AddProject('First Project'), new AddProject('Second Project')];
projects[0]._todos.push(new CreateTodo('first task', 'something first', '1997-09-02T01:00', 'High', 'false', false));
projects[1]._todos.push(new CreateTodo('second task', 'something first', '1997-09-02T01:00', 'High', 'false', false));

window.onload = function () {
  renderProjectsOnLoad(projects);
};

export let dataId, nameId, parentId;
document.addEventListener('click', function (e) {
  if (e.target.getAttribute('data-name') && e.target.getAttribute('data-parent')){
    if (e.target.innerHTML === 'Edit' || e.target.innerHTML === 'Delete'){
      nameId = e.target.dataset.name;
      parentId = e.target.dataset.parent;
    }
    if (e.target.innerHTML === 'Pending' || e.target.innerHTML === 'Complete'){
      let name = Number(e.target.dataset.name);
      let parent = Number(e.target.dataset.parent);
      projects[parent]._todos[name].toggleList();
      renderTodoTasks(projects[Number(parent)], dataId);
    }
  }

  if (e.target.id === 'dashboard'){
    const cf = document.querySelector('.hider');
    cf.classList.remove('hide');
  }

  if (e.target.parentNode.getAttribute('data-id')){
    const cf = document.querySelector('.hider');
    cf.classList.add('hide');
    dataId = e.target.parentNode.dataset.id;
    renderTodoTasks(projects[Number(dataId)], dataId);
    renderSingleProject();
  }

  if (e.target.classList.contains('add-todo')){
    let obj = addTodo();
    if (obj.title !== ''){
      let todo = new CreateTodo(obj.title, obj.desc, obj.date, obj.priority, obj.notes, obj.done);
      projects[Number(dataId)]._todos.push(todo);
      renderTodoTasks(projects[Number(dataId)]);
      resetForm();
    }
  }
});

const add = document.querySelector('.add');
const projectName = document.getElementById('addProject');
add.addEventListener('click', function (e) {
  e.preventDefault();
  let project = new AddProject(projectName.value);
  projects.push(project);
  renderProject();
  projectName.value = '';
});

deleteTodo();