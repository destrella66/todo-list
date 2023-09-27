
function addNote() {
let noteId = document.getElementById("noteId").value;

    if (noteId.trim() !== "") {
    let receiveNotes = document.getElementById("receiveNotes")


      // Create a div element to the note
      let noteBox = document.createElement("div");
      noteBox.textContent = noteId;
      noteBox.classList.toggle("noteBox")

      // Create a button to remove notes
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.onclick = function () {
        // Use "this" to match with the note that is selected
        receiveNotes.removeChild(this.parentElement);
      };

      // Add new notes
      noteBox.appendChild(deleteButton);
      receiveNotes.appendChild(noteBox);

      // Clear noteId input
      noteId= "";
    }
  }