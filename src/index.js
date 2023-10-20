import championship from "./script/championship.js"

// let champs = new championship(10);
// champs.setTeam = "time-1"
// champs.setTeam = "time-2"
// champs.setTeam = "time-3"
// champs.setTeam = "time-4"
// champs.setTeam = "time-5"
// champs.setTeam = "time-6"
// champs.setTeam = "time-7"
// champs.setTeam = "time-8"
// champs.setTeam = "time-9"
// champs.setTeam = "time-10"

// champs.createChampionship;
// champs.saveChampionship = "campeonatoTeste";

// champs.games[0].winner = "time-2"
// champs.games[10].winner = "time-2"
// champs.games[39].winner = "time-7"
// champs.championshipTable;


// localStorage.setItem('selected-champ','campeonatoTeste');
let currentchamp = localStorage.getItem('selected-champ');
let champList = localStorage.getItem('champList');
if(currentchamp == null){
    localStorage.setItem('selected-chap', '');
}
if(champList == null){
    let champListTemp = {champ:[]}
    localStorage.setItem('champList',JSON.stringify(champListTemp));
    champList = localStorage.getItem('champList');
}
champList = JSON.parse(champList);