const prompt = require('prompt-sync')();
let listaTarefas = [];

function criar() {
    
    var tarefaDiaria = {
        dia: "",
        tarefa: ""
    };
    
    var dia = prompt("Quando você fez?");
    var tarefa = prompt("Qual tarefa você fez?");
    
    tarefaDiaria.dia = dia;
    tarefaDiaria.tarefa = tarefa;

    listaTarefas.push(tarefaDiaria)

    return console.log(listaTarefas);
}

function remover() {
    escolha = prompt("Qual tarefa você deseja remover?")
}

module.exports = crud;
