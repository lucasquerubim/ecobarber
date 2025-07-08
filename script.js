// para a persistência de dados, localStorage foi usado
// localStorage é uma API do HTML que armazena dados dentro do próprio browser
// localStorage guarda dados em um dicipnário, apenas aceitando STRING como valores
var coletas = JSON.parse(localStorage.getItem("coletas"));
if (coletas == null) {coletas = []}; // se coletas for nulo, retorna uma lista vazia

var usuario = JSON.parse(localStorage.getItem("user")); // transforma a string armazenada em objeto

//objeto de coletas
class Coleta {
    residuos = null;
    data_solicitacao = null;
    data_prevista = null
    data_entregue = null;
};

// objeto de usuário
class Usuario {
    coletas_agendadas = [];
    historico_coletas = [];

    terminar_coleta = function(i) {
        historico_coletas.push[coletas_agendadas[i]];
        coletas_agendadas.splice(i,1) // .splice(i,n) retira n items a partir do indice da lista (i)
    }
};


// registra a coleta no sistema e nos dados do usuario
function registrarColetaSistema(residuos) {
    const col = new Coleta();
    col.residuos = residuos;
    col.data_solicitacao = Date.now();
    
    coletas.push(col);
    usuario.coletas_agendadas.push(col);
    // armazena localmente, pq se não fizer isso, os dados NÃO persistem ao trocar de janela
    localStorage.setItem("coletas",JSON.stringify(coletas))
    localStorage.setItem("user",JSON.stringify(usuario))
    console.log(coletas);
};

function listarColetas() {
    const listacoletas = document.getElementById("lista-coletas");

    for (i=0; i < usuario.coletas_agendadas.length; i++) {
        const coletadiv = document.createElement("div"); // cria novo div para cada coleta agendada
        const data = new Date(usuario.coletas_agendadas[i].data_solicitacao); // a data precisa ser processada pelo métodos do objeto Date() primeiro
        coletadiv.className = "item-coleta"; // atribui uma classe
        coletadiv.innerHTML =
        `<h2>Coleta agendada</h2>
        <p>Agendado às ${data.getHours()}:${data.getMinutes()} de ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</p>
        <p>Resíduos: ${usuario.coletas_agendadas[i].residuos}</p>`; // preenche o html
        // para conseguir uma data certa, precisa rodar todos os métodos para pegar minutos, horas, etc
        listacoletas.appendChild(coletadiv); // adiciona o div para a lista de coletas
    };

    // mesma coisa
    for (i=0; i < usuario.historico_coletas.length; i++) { 
        const coletadiv = document.createElement("div");
        const data = new Date(usuario.coletas_agendadas[i].data_solicitacao)
        coletadiv.className = "item-coleta";
        coletadiv.innerHTML =
        `<h2>Coleta realizada</h2>
        <p>Agendado às ${data.getHours()}:${data.getMinutes()} de ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</p>
        <p>Resíduos: ${usuario.historico_coletas[i].residuos}</p>`;
        listacoletas.appendChild(coletadiv);
    };
}

console.log(localStorage.getItem("user")); // só pra fazer debug