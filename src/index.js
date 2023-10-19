import championship from "./script/championship.js"

let champs = new championship(10);
let champs2 = new championship();
champs.setTeam = "time-1"
champs.setTeam = "time-2"
champs.setTeam = "time-3"
champs.setTeam = "time-4"
champs.setTeam = "time-5"
champs.setTeam = "time-6"
champs.setTeam = "time-7"
champs.setTeam = "time-8"
champs.setTeam = "time-9"
champs.setTeam = "time-10"

champs.createChampionship;
champs.saveChampionship = "campeonatoTeste";
champs2.loadChampionship = "campeonatoTeste";
// console.log(champs2.maxOfTeams)
// console.log(champs2.teams)
// console.log(champs2.games)
champs.games[0].winner = "time-2"
champs.games[10].winner = "time-2"
champs.games[39].winner = "time-7"
champs.championshipTable;

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