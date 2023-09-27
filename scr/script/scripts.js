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
                <button id="deleteButton">Excluir</button>
                
            </div>
        `;
        let deleteButton = document.getElementById("deleteButton");

deleteButton.onclick = function () {
    // Use "this" para se referir ao botão que foi clicado
    receiveNotes.removeChild(this.parentElement);
};

        noteId.value = "";


       
        

    }
});    