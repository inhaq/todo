import './scss/style.scss';
import 'bootstrap';
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
projects[1]._todos.push(new CreateTodo('second task','something first','1997-09-02T01:00','High','false',false))
window.onload = function(){
  renderProjectsOnLoad(projects);
};
// single project 
export let a;
document.addEventListener('click',function(e){
  if(e.target.getAttribute('data-name') && e.target.getAttribute('data-parent')){
    // if(e.target.innerHTML === 'Save changes'){
    //   console.log(paaaaaaaaaaaas)
    //      newValues();
    //   console.log(newValues())
      

    // }
    if(e.target.innerHTML === 'Pending' || e.target.innerHTML === 'Complete'){
    let name = Number(e.target.dataset.name);
    let parent = Number(e.target.dataset.parent);
    projects[parent]._todos[name].toggleList();
    renderTodoTasks(projects[Number(parent)],a);}
  }
 
  if(e.target.parentNode.getAttribute('data-id')){
    // console.log(projects);
    const tableHead = document.querySelector('.thead-light');
    const tableBody = document.querySelector('tbody');
     a = e.target.parentNode.dataset.id;
    if (tableBody !== null) {
      // tableBody.classList.add('hide');
    }
   
    renderTodoTasks(projects[Number(a)],a);
    
    renderSingleProject();
    
  }
  if(e.target.classList.contains('add-todo')){
  let obj = addTodo();
    let todo = new CreateTodo(obj.title,obj.desc,obj.date,obj.priority,obj.notes,obj.done)
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