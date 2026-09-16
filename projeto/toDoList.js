const prompt = require("prompt-sync")({ sigint: true });

const lista = [];

function Menu() {
    console.log("\n-------Menu-------");
    console.log("1 - Listar itens");
    console.log("2 - Adicionar itens");
    console.log("3 - Editar item");
    console.log("4 - Excluir item");
    console.log("5 - Marcar/desmarcar como comprado");
    console.log("0 - Sair");
}

function main() {
    let opcao;
    do {
        Menu();
        opcao = prompt("Escolha uma opcao: ").trim();
        switch (opcao) {
            case "1":
                listItens();
                break;
            case "2":
                adicionarTarefa();
                break;
            case "3":
                editartarefa();
                break;
            case "4":
                excluirTarefa();
                break;
            case "5":
                marcarFeito();
                break;
            case "0":
                console.log("\Encerrando... Tchauzinho ;)")
                break;
            default:
                console.log("\nOpção inválida, digite um número entre  e 5");
                break;
        }

    } while (opcao !== "0");

}
main()

function listItens() {
    if (lista.length === 0) {
        console.log("\nLista vazia.");
        return;
    }
    console.log("\n -------LISTA DE COMPRAS-------");
    for (let index = 0; index < lista.length; index++) {
        const item = lista[index];
        const marcar = item.concluida ? "[X]" : "[ ]";
        console.log(`${index + 1} - ${marcar} ${item.texto}`);
    }
}

function adicionarTarefa() {
    const texto = prompt("Qual tarefa você gostaria de adicionar? ").trim();
        if (texto === "") {
            console.log("Tarefa Inválida!");
        return;
    }
    lista.push({
        texto: texto,
        concluida: false
    });
console.log(`Tarefa "${texto}" adicionada com sucesso!`);
}

function editartarefa(){
    listItens();
    if (lista.length ===0) return;
    const posicao = Number(prompt("\nDigite o número da tarefa que você deseja editar ")) -1;
    if (posicao < 0 || posicao > lista.length){
        console.log("Item invãlido!");
        return;
    }
    const novoNome = prompt("Digite o novo nome: ").trim();
  if (novoNome !== "") {
    lista[posicao].texto = novoNome;
  }
  console.log("\n Tarefa atualizada!");
}

function excluirTarefa() {
  listItens();
  if (lista.length === 0) return;

  const posicao = Number(prompt("\nDigite o núemero da tarefa a excluir: ")) - 1;

  if (posicao < 0 || posicao >= lista.length) {
    console.log("Tarefa inválida.");
    return;
  }

  const removido = lista.splice(posicao, 1);
  console.log(`\nA tarefa "${removido[0].texto}" foi removida!`);
}

function marcarFeito() {
  listItens();
  if (lista.length === 0) return;

  const posicao = Number(prompt("\nDigite o número da tarefa que deseja alterar o status: ")) - 1;

  if (posicao < 0 || posicao >= lista.length) {
    console.log("Tarefa inválida.");
    return;
  }

  if (lista[posicao].concluida === true) {
    lista[posicao].concluida = false;
  } else {
    lista[posicao].concluida = true;
  }

  console.log(`\nO status da tarefa "${lista[posicao].texto}" alterado!`);
}