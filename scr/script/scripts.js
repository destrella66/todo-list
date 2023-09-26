let takeNotes = document.getElementById("take-notes");
const addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
const deleteNote = document.getElementById("deleteNote");
let  noteBox = document.getElementsByClassName("noteBox");


addNote.addEventListener("click", () => {

    if(noteId.value == ''){
        alert("Enter a note!");
    }
    else{
        takeNotes.innerHTML +=`
            <div class="noteBox">
                <span>
                    ${noteId.value}
                </span>
                <button class=”delete”>
                    X
                </button>
            </div>
        `;
            
        
    }
});
