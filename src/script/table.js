import championship from "../script/championship.js"

let champs = new championship();
let championshipName = localStorage.getItem("select-champ") == null;
champs.loadChampionship = "campeonatoTeste";
const tabelaPontos = document.querySelector("#tabela-pontos");
champs.teams.forEach((team) =>{
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPoins = document.createElement("td");
    let tdWin = document.createElement("td");
    let tdLoses = document.createElement("td");
    tdName.appendChild(document.createTextNode(`${team.name}`));
    tdPoins.appendChild(document.createTextNode(`${team.points}`));
    tdWin.appendChild(document.createTextNode(`${team.win}`));
    tdLoses.appendChild(document.createTextNode(`${team.lose}`));

    tr.appendChild(tdName);
    tr.appendChild(tdPoins);
    tr.appendChild(tdWin);
    tr.appendChild(tdLoses);

    tabelaPontos.appendChild(tr); 
})