let takeNotes = document.getElementById("take-notes");
let addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
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
                <button class="deleteButton">Excluir</button>
                
            </div>
        `;


        noteId.value = "";

    }
});    
