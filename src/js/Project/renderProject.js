const sidebar = document.getElementById('sidebar-wrapper');
let count = 0;

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

    if (addProjectField.value !== ''){
      newProj.textContent = addProjectField.value;
      topDiv.appendChild(newProj);
      sidebar.appendChild(topDiv);
    }
  })
}

function renderSingleProject() {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'dashboard'){
      document.querySelector('.project').classList.add('hide');
      document.querySelector('.tasks').classList.add('hide');
    } else if (e.target.parentNode.getAttribute('data-id')){
      document.querySelector('.project').classList.remove('hide');
      document.querySelector('.tasks').classList.remove('hide');
    }
  })
}

export {renderSingleProject, renderProject, renderProjectsOnLoad};