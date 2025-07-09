var coletas = JSON.parse(localStorage.getItem("coletas"));
if (coletas == null) {coletas = []}; 

var usuario = JSON.parse(localStorage.getItem("user"));


class Coleta {
    residuos = null;
    data_solicitacao = null;
    data_prevista = null
    data_entregue = null;
};


class Usuario {
    coletas_agendadas = [];
    historico_coletas = [];

    terminar_coleta = function(i) {
        historico_coletas.push[coletas_agendadas[i]];
        coletas_agendadas.splice(i,1) 
    }
};



function registrarColetaSistema(residuos) {
    const col = new Coleta();
    col.residuos = residuos;
    col.data_solicitacao = Date.now();
    
    coletas.push(col);
    usuario.coletas_agendadas.push(col);
     localStorage.setItem("coletas",JSON.stringify(coletas))
    localStorage.setItem("user",JSON.stringify(usuario))
    console.log(coletas);
};

function listarColetas() {
    const listacoletas = document.getElementById("lista-coletas");

    for (i=0; i < usuario.coletas_agendadas.length; i++) {
        const coletadiv = document.createElement("div"); 
        const data = new Date(usuario.coletas_agendadas[i].data_solicitacao);
        coletadiv.className = "item-coleta"; 
        coletadiv.innerHTML =
        `<h2>Coleta agendada</h2>
        <p>Agendado às ${data.getHours()}:${data.getMinutes()} de ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</p>
        <p>Resíduos: ${usuario.coletas_agendadas[i].residuos}</p>`;
           listacoletas.appendChild(coletadiv); 
    };

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
