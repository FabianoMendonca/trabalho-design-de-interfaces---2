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
    localStorage.setItem('selected-champ', '');
}
if(champList == null){
    let champListTemp = {champ:[]}
    localStorage.setItem('champList',JSON.stringify(champListTemp));
    champList = localStorage.getItem('champList');
}
champList = JSON.parse(champList);
if(champList.champ.length == 0){
    console.log(champList)
    let main = document.querySelector('#main-content');
    main.innerHTML += `<span>Nenhum campeonato encontrado</span>` 
}else{
    // <ul class="list-group">
    //     <li class="list-group-item active" aria-current="true">An active item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //     <li class="list-group-item">A fourth item</li>
    //     <li class="list-group-item">And a fifth one</li>
    // </ul>
    let main = document.querySelector('#main-content');
    let ul = document.createElement('ul');
    ul.classList.add('list-group');
    champList.champ.forEach(element => {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let button = document.createElement('button');

        li.classList.add('list-group-item');
        // li.classList.add('list-group-item-secondary');
        li.classList.add('d-flex', 'gap-2', 'justify-content-between');
        
        // span.classList.add('g-col-6')
        button.classList.add('btn', 'btn-dark')
        
        button.appendChild(document.createTextNode('selecionar'));
        
        button.addEventListener('click', (e) =>{
            localStorage.setItem('selected-champ', element);
        })
        li.appendChild(span.appendChild(document.createTextNode(element)));
        li.appendChild(button);

        ul.appendChild(li)        
    });
    main.appendChild(ul);
}