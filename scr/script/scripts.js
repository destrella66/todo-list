let addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
let receiveNotes = document.getElementById("receiveNotes");
let noteBox = document.querySelector('.noteBox');

let banco = [
    {'tarefa': 'Dormir', 'status':'checked'},
    {'tarefa': 'Estudar', 'status':''},
];

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('noteBox');
    item.addEventListener('click', clickItem)
    item.innerHTML = `  
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
        `
    receiveNotes.appendChild(item);
}

const limparTarefas = () => {
while(receiveNotes.firstChild){
    receiveNotes.removeChild(receiveNotes.lastChild)
}
}


const atualizarTela = () => {
    limparTarefas();
    banco.forEach( (item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (event) => {
    const texto = noteId.value;

    banco.push({'tarefa': texto, 'status': 'checked'})
    noteId.value = '';
}

const enterPress = (event) => {
    const tecla = event.key; 

    if(tecla === "Enter"){
        inserirItem();
        atualizarTela();
    }
} 
const buttonClick = () => {
    if(noteId.value != ''){

        inserirItem();
        atualizarTela();
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice =  elemento.dataset.indice;
        removerItem(indice);
    }
}


noteId.addEventListener("keypress", enterPress)
addNote.addEventListener("click", buttonClick)
document.querySelector(".noteBox").addEventListener("click", clickItem)

atualizarTela();