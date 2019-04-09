import './scss/style.scss';
import addProject from './js/addProject';
import Create from './js/create';
import complete from './js/complete';
import priority from './js/priority';
import {renderProject, renderSingleProject, renderTodo} from './js/renderTodo';

addProject();
renderProject();
renderSingleProject();
renderTodo();
let projects = [];

let add = document.querySelector('.add');

add.addEventListener('click', function (e) {
  e.preventDefault();
  let a = new Create('hello',2,3,4,5,6);
  projects.push(a);
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