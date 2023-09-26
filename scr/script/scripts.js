let takeNotes = document.getElementById("take-notes");
let addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
const deleteNote = document.getElementById("deleteNote");
let  noteBox = document.getElementsByClassName("noteBox");
let receiveNotes = document.getElementById("receiveNotes")


addNote.addEventListener("click", () => {

    if(noteId.value == ''){
        alert("Enter a note!");
    }
    else{
        receiveNotes.innerHTML +=`
            <div class="noteBox">
                <span>
                    ${noteId.value}
                </span>
                <button class=”delete”>
                    X
                </button>
            </div>
        `;
        noteId.value = "";
            
        
    }
});
