class TodoList{
    constructor(){
        this.notes = [];
    }

    addNote(content) {
        const newNote = {
            id: Math.floor(Math.random() * 1000000),
            content: content,
            isDone: false
        };

        this.notes.push(newNote);
        console.log(`note with id ${newNote.id} was created`);
    }

    getNoteById(id){
        return this.notes.find(note => note.id == id);
    }

    getNoteByContent(content){
        return this.notes.find(note => note.content.includes(content));
    }

    showAll(){
        for(const note of this.notes){
            console.log(`${note.id}: [${note.isDone}] ${note.content}`);
        }
    }

    markDone(id){
        const note = this.getNoteById(id);
        note.isDone = true;
    }

    deleteNote(id){
        const note = this.notes.find(note => note.id == id);
        if(note === undefined){
            console.log("can't find note with id " + id);
        }
        else{
            this.notes = this.notes.filter(note => note.id != id);
        }
    }
}

module.exports = TodoList;