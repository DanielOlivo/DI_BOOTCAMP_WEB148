const TodoList = require('./todo.js');

const todo = new TodoList();
todo.showAll();

todo.addNote('fix somwthing');
todo.addNote('relax')
todo.showAll();

{
    const note = todo.getNoteByContent('fix');
    todo.markDone(note.id);
    todo.showAll();
}

{
    const note = todo.getNoteByContent('relax');
    todo.markDone(note.id);
    todo.showAll();
}


