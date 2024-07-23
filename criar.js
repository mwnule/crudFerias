function criar() {
    var tarefaDiaria = {
        dia: "",
        tarefa: ""
    };
    
    var dia = prompt("Quando você fez?");
    var tarefa = prompt("Qual tarefa você fez?");
    
    tarefaDiaria.dia = dia;
    tarefaDiaria.tarefa = tarefa;

    return tarefaDiaria;
}

module.exports = criar;
