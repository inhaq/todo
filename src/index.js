import './scss/style.scss';
import AddProject from './js/addProject';
// import Create from './js/create';
import complete from './js/complete';
import priority from './js/priority';
import {renderProject, renderSingleProject,renderTodoTasks ,renderProjectsOnLoad,addTodo,resetForm} from './js/renderTodo';
import CreateTodo from './js/create';

// document.addEventListener('click',function(e){
//   e.preventDefault();
// })
renderSingleProject();
// renderTodo();
renderProject();
let projects = [ new AddProject('First'), new AddProject('Second')];
projects[0]._todos.push(new CreateTodo('first task','something first','1997-09-02T01:00','High','false',false))
window.onload = function(){
  renderProjectsOnLoad(projects);
};
// single project 
let a;
document.addEventListener('click',function(e){
  
 
  if(e.target.parentNode.getAttribute('data-id')){
    console.log(projects);
    const tableBody = document.querySelector('tbody');
     a = e.target.parentNode.dataset.id;
    if (tableBody !== null) {
      tableBody.innerHTML = null;
     
    }
    renderTodoTasks(projects[Number(a)]);
    renderSingleProject();
    
  }
  if(e.target.classList.contains('add-todo')){
  let obj = addTodo();
    let todo = new CreateTodo(obj.title,obj.desc,obj.date,obj.priority,obj.notes,obj.done)
    console.log(a);
    projects[Number(a)]._todos.push(todo); 
    renderTodoTasks(projects[Number(a)]);
    resetForm();
  }
  
});
let add = document.querySelector('.add');
const projectName = document.getElementById('addProject');
add.addEventListener('click', function (e) {
 
  e.preventDefault();
  let a = new AddProject(projectName.value);
  projects.push(a);
  renderProject();
  projectName.value = '';
  f();
});

function f() {
  if (projects[0]){
    console.log(Array.from(projects));
  }
}


complete();

priority();

// event listener on add btn

// create an instance from add project to pass it to render

// render new project

//   add project -> todolist (add new, already added)