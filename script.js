 // criar um array vazio
 let tarefas = [];

function adicionarTarefa() {
  // pegar o que está escrito no input
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  // criar uma variavel para a mensagem
  const mensagem = document.getElementById("mensagem");

  // input para caso o input ficar em branco
  if (tarefa == "") {
    let mensagemErro = "Você precisa digitar uma tarefa!";
    mensagem.textContent = mensagemErro;
    mensagem.style.color = "red";
  } else {
  // add uma mensagem 
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green";

    tarefas.push(tarefa);
    renderizarTarefas();

    botaoAparecer()
  }

  // limpar o input depois que clicar no botão de add tarefa
  inputTarefa.value = "";
}

function renderizarTarefas() {
  // pegar o elemento pai (ul) e adicionar um elemento filho (li) já com o valor do input
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""

  // for itens na lista: 1. iten inicical (iterador), 2. item final (consição), 3. se vai de 1 em 1 ou se pula (frequencia)
  for (let i = 0; i < tarefas.length; i++) {
   let novaTarefa = document.createElement("li");
   novaTarefa.textContent = tarefas[i];

   let buttons = document.createElement("div");
   buttons.className = "botoes";
   
   let botaoRemover = document.createElement("button");
   botaoRemover.className = "remover";
   botaoRemover.textContent = "Remover";
   botaoRemover.onclick =  ()  => removerTarefa(i);

   let botaoEditar = document.createElement("button");
   botaoEditar.className = "editar";
   botaoEditar.textContent = "Editar";
   botaoEditar.onclick =  ()  => editarTarefa(i);

   buttons.appendChild(botaoRemover);
   buttons.appendChild(botaoEditar);
   novaTarefa.appendChild(buttons);
   listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:");
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
}

function limparLista() {
  tarefas.length = 0;
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Lista de tarefas limpa com sucesso!"
  botaoSumir()
}

function botaoAparecer() {
  let botaoAparecer = document.getElementById("botaoAparecer");
  if (tarefas.length !== 0) {
    botaoAparecer.style.display = "inline";
  }
}

function botaoSumir () {
  let botaoAparecer = document.getElementById("botaoAparecer");
  botaoAparecer.style.display = "none";
}
