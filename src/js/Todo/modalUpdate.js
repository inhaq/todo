import {parentId,nameId,projects} from '../../index'

export default function modalUpdate(){
   document.getElementById('new-Title').value = projects[Number(parentId)]._todos[Number(nameId)]._title;
   document.getElementById('new-description').value = projects[Number(parentId)]._todos[Number(nameId)]._description;
   document.getElementById('new-dueDate').value = projects[Number(parentId)]._todos[Number(nameId)]._dueDate;
   document.getElementById('new-priority').selected = `projects[Number(parentId)]._todos[Number(nameId)]._priority`;
   document.getElementById('new-notes').value = projects[Number(parentId)]._todos[Number(nameId)]._notes;
}