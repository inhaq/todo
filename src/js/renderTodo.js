function renderProject() {

  const addBtn = document.querySelector('.add');
  const addProjectField = document.getElementById('addProject');
  const sidebar = document.getElementById('sidebar-wrapper');

  let count = 0;
  addBtn.addEventListener('click', function () {
    const topDiv = document.createElement('div');
    topDiv.classList.add('list-group', 'list-group-flush');
    topDiv.setAttribute('data-id', `${count++}`);
    const newProj = document.createElement('a');
    newProj.classList.add('list-group-item', 'list-group-item-action', 'bg-light');

    if (addProjectField.value !== ''){
      newProj.textContent = addProjectField.value;
      topDiv.appendChild(newProj);
      sidebar.appendChild(topDiv);
      addProjectField.value = '';
    }
  })
}

function renderSingleProject() {
  document.addEventListener('click', function (e) {
    if (e.target.parentNode.getAttribute('data-id')){
      console.log(e.target.parentNode.getAttribute('data-id'));
      const show = document.querySelector('.show');
      show.classList.remove('show')
    }
  })
}

function renderTodo() {

}

export {renderProject, renderSingleProject, renderTodo};