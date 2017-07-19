console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
   }catch(e){
       return [];
   }
};

var saveNotes = (notes) => {
     fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};



var addNote = (title, body) => {
   var notes = fetchNotes();
   var note = {
       title,
       body
   };
   
    /* 1st method
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    OR 2nd method (ES6 arrow function) is below for ES6 
    */

   var duplicateNotes = notes.filter((note) => note.title === title);
  
   if(duplicateNotes.length === 0){
       notes.push(note);
       saveNotes(notes);
       return note;
   }
   else{
       console.log('Note already Exist');
   }
   
}; 

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading ', title);
}

var removeNote = (title) =>{
   var notes = fetchNotes();
   var filteredNotes =notes.filter((note) => note.title!== title );
   saveNotes(filteredNotes);   

   return notes.length !== filteredNotes.length; 
}

module.exports = {
    addNote,   // or addNote : addNote for <ES6
    getAll,
    getNote,
    removeNote
};