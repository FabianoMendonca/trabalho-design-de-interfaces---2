import championship from "../script/championship.js"


let champ = new championship();
let currentChamponshipName = localStorage.getItem("selected-champ");

if(currentChamponshipName == null || currentChamponshipName==''){
    let mainContent = document.querySelector("#main-content");
    // let tableGames = document.querySelector("#tabela-1-jogos");
    const node = document.getElementById("tabela-games-id");
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
    champ.loadChampionship = currentChamponshipName;
    const tabelaPontos = document.querySelector("#tabela-jogos");
    champ.games.forEach((game) =>{
        let tr = document.createElement("tr");
        let tdPlayerOne = document.createElement("td");
        let tdPlayerTwo = document.createElement("td");
        let tdWinner = document.createElement("td");
        // console.log(team)
        
        tdPlayerOne.appendChild(document.createTextNode(`${game.playerOne}`));
        tdPlayerTwo.appendChild(document.createTextNode(`${game.playerTwo}`));

        if(game.winner == ''){
            let buttonPlayerOne = document.createElement('button');
            let buttonPlayerTwo = document.createElement('button');
            let buttonDraw = document.createElement('button');
            let div = document.createElement('div');

            buttonPlayerOne.classList.add('btn','btn-sm','btn-dark');
            buttonPlayerTwo.classList.add('btn','btn-sm','btn-dark');
            buttonDraw.classList.add('btn','btn-sm','btn-dark');

            buttonPlayerOne.style = 'margin-rigth:2px';
            buttonPlayerTwo.style = 'margin-rigth:2px';
            buttonPlayerTwo.style = 'margin-left:2px';
            buttonDraw.style = 'margin-left:2px';
           
            buttonPlayerOne.appendChild(document.createTextNode(`${game.playerOne}`));
            buttonPlayerTwo.appendChild(document.createTextNode(`${game.playerTwo}`));
            buttonDraw.appendChild(document.createTextNode(`Empate`));

            buttonPlayerOne.addEventListener('click', ()=>{
                // console.log('teste')
                game.winner = game.playerOne;
                champ.saveChampionship = currentChamponshipName;
                document.location.reload();
            })

            buttonPlayerTwo.addEventListener('click', ()=>{
                // console.log('teste')
                game.winner = game.playerTwo;
                champ.saveChampionship = currentChamponshipName;
                document.location.reload();
            })

            buttonDraw.addEventListener('click', () =>{
                game.winner = 'draw';
                champ.saveChampionship = currentChamponshipName;
                document.location.reload();
            })

            div.appendChild(buttonPlayerOne);
            div.appendChild(buttonPlayerTwo);
            div.appendChild(buttonDraw);

            div.classList.add('container')
            div.classList.add('d-inline-flex')
            div.classList.add('flex-sm-row')
            tdWinner.appendChild(div)
        }else if(game.winner == 'draw'){
            tdWinner.appendChild(document.createTextNode(`Empate`));
        }else{
            tdWinner.appendChild(document.createTextNode(`${game.winner}`));
        }
        
        tr.appendChild(tdPlayerOne);
        tr.appendChild(tdPlayerTwo);
        tr.appendChild(tdWinner);

        tabelaPontos.appendChild(tr); 
    })
}