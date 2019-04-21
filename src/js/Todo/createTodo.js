export default class CreateTodo {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this._title = title,
      this._description = description === '' ? 'N/A' : description,
      this._dueDate = dueDate === '' ? 'N/A' : dueDate,
      this._priority = priority,
      this._notes = notes === '' ? 'N/A' : notes,
      this._checklist = checklist
  }

  toggleList() {
    this._checklist = !this._checklist
  }

  edit(new_title, new_description, new_dueDate, new_priority, new_notes) {
    this._title = new_title;
    this._description = new_description === '' ? 'N/A' : new_description;
    this._dueDate = new_dueDate === '' ? 'N/A' : new_dueDate;
    this._priority = new_priority;
    this._notes = new_notes === '' ? 'N/A' : new_notes;
  }
}