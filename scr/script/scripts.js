let addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
let receiveNotes = document.getElementById("receiveNotes");
let noteBox = document.querySelector('.noteBox');

// let banco = [
//     { 'tarefa': 'Dormir', 'status': 'checked' },
//     { 'tarefa': 'Estudar', 'status': '' },
// ];

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))
const banco = getBanco();

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
    while (receiveNotes.firstChild) {
        receiveNotes.removeChild(receiveNotes.lastChild)
    }
}


const atualizarTela = () => {
    limparTarefas();

    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice))
}

const inserirItem = (event) => {
    const texto = noteId.value;
    banco.push({ 'tarefa': texto, 'status': 'checked' })
    setBanco(banco);
    noteId.value = '';
}

const enterPress = (event) => {
    const tecla = event.key;

    if (tecla === "Enter") {
        inserirItem();
        atualizarTela();
    }
}
const buttonClick = () => {
    if (noteId.value != '') {

        inserirItem();
        atualizarTela();
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1);
    setBanco(banco)
    atualizarTela();
}

const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);


}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }
    else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}


noteId.addEventListener("keypress", enterPress)
addNote.addEventListener("click", buttonClick)
document.querySelector(".noteBox").addEventListener("click", clickItem)

atualizarTela(); 