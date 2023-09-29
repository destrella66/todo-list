let addNote = document.getElementById("addNote");
let noteId = document.getElementById("noteId");
let receiveNotes = document.getElementById("receiveNotes");
let noteBox = document.querySelector('.noteBox');

// let banco = [
//     { 'tarefa': 'Dormir', 'status': 'checked' },
//     { 'tarefa': 'Estudar', 'status': '' },
// ];


// Pega o banco de dados pelo Local Storage
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

// Atualiza o banco de dados do Local Storage
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))

const banco = getBanco();

// Criação das tarefas
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
// limpa a lista de tarefas até não sobrar nenhuma para não duplicar quanto atualizar a tela
const limparTarefas = () => {
    while (receiveNotes.firstChild) {
        receiveNotes.removeChild(receiveNotes.lastChild)
    }
}

// Atualiza a tela a cada nova interação do usuário com o banco de dados
const atualizarTela = () => {
    limparTarefas();

    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice))
}

// Insere um item na tela, dando o nome da tarefa e o status dela
const inserirItem = (event) => {
    const texto = noteId.value;
    banco.push({ 'tarefa': texto, 'status': 'checked' })
    setBanco(banco);
    noteId.value = '';
}
// Adciona nova tarefa quando apertar "Enter"
const enterPress = (event) => {
    const tecla = event.key;

    if (tecla === "Enter") {
        inserirItem();
        atualizarTela();
    }
}

// Adciona nova tarefa quando apertar o butão "ADD"

const buttonClick = () => {
    if (noteId.value != '') {

        inserirItem();
        atualizarTela();
    }
}

// Remove os itens quando clica no "X"
const removerItem = (indice) => {
    banco.splice(indice, 1);
    setBanco(banco)
    atualizarTela();
}

// Atualiza o status da tarefa quando clica no "checkbox"
const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);


}
// Define o que deve ser feito com o item a partir de onde o usuário clicou
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

// Chamadas padrões
noteId.addEventListener("keypress", enterPress)
addNote.addEventListener("click", buttonClick)
document.querySelector(".noteBox").addEventListener("click", clickItem)

atualizarTela();

// Feito com <3 por Davi Estrella 