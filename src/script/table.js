import championship from "../script/championship.js"

let champs = new championship();
let currentChamponshipName = localStorage.getItem("selected-champ");

if(currentChamponshipName == null || currentChamponshipName == ''){
    let mainContent = document.querySelector("#main-content");
    // let tableGames = document.querySelector("#tabela-1-jogos");
    const node = document.getElementById("tabela-1-jogos");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    let span = document.createElement('span').appendChild(
        document.createTextNode(`Nenhum campeonato selecionado`)
        )
        mainContent.appendChild(span);
}else{
    let mainContent = document.querySelector("#main-content");
    if(mainContent.parentNode){
        mainContent.parentNode.removeChild(mainContent)
    }
    champs.loadChampionship = currentChamponshipName;
    const tabelaPontos = document.querySelector("#tabela-pontos");
    champs.teams.forEach((team) =>{
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdPoins = document.createElement("td");
        let tdWin = document.createElement("td");
        let tdLoses = document.createElement("td");
        let tdDraw = document.createElement("td");
        
        tdName.appendChild(document.createTextNode(`${team.name}`));
        tdPoins.appendChild(document.createTextNode(`${team.points}`));
        tdWin.appendChild(document.createTextNode(`${team.win}`));
        tdLoses.appendChild(document.createTextNode(`${team.lose}`));
        tdDraw.appendChild(document.createTextNode(`${team.draw}`));

        tr.appendChild(tdName);
        tr.appendChild(tdPoins);
        tr.appendChild(tdWin);
        tr.appendChild(tdLoses);
        tr.appendChild(tdDraw);

        tabelaPontos.appendChild(tr); 
})}