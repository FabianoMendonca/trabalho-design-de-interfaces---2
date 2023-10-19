import Game  from "./game.js";

export default class championship {
    /**
     * @param {Number|undefined} maxOfTeams
     */
    constructor (maxOfTeams){
        this.games = [];
        this.teams = [];
        if( maxOfTeams == undefined || 
            maxOfTeams > 20 ||
            maxOfTeams < 0 ){
            this.maxOfTeams = 20; 
        }else{
            this.maxOfTeams = maxOfTeams;
        } 
    }

    /**
     * @param {String} nameTeam
     */
    set setTeam(nameTeam){
        if(this.teams.length < this.maxOfTeams){
            this.teams.push({name: nameTeam,
                             points: 0,
                             win:0,
                             lose:0,
                             draw:0});
            return 200;
        }else{
            return 500;
        }
    }

    get getTeams(){
        return this.teams;
    }
    get getGames(){
    }

    /**
     * @param {String} championshipName
     */
    set saveChampionship(championshipName){

        let data = {
                    teams : JSON.stringify(this.teams),
                    games : JSON.stringify(this.games),
                    maxOfTeams : this.maxOfTeams
                    }
        localStorage.setItem(championshipName, JSON.stringify(data));
        return 200;
    }
    get createChampionship(){
        try {
            console.log(this.maxOfTeams)
            for (let i = 0; i < this.maxOfTeams - 1 ; i++) {
                // console.log(i)
                for(let j = i+1; j < this.maxOfTeams; j++){ 
                     this.games.push( Game (this.teams[i].name, this.teams[j].name));
                    //  console.log(i +' - '+ j)
                }
            }
        } catch (error) {
            
        }
    }
    set loadChampionship(championshipName){
        let champ = JSON.parse(localStorage.getItem(championshipName));
        this.games = JSON.parse(champ['games'])
        this.teams = JSON.parse(champ['teams'])
        this.maxOfTeams = Number(champ['maxOfTeams'])
    }
    get championshipTable(){
        this.teams.forEach((team) =>{
            team.points = 0;
        })
        this.games.forEach((element)=>{
            if(element.winner == 'draw'){
                this.teams.forEach((team) =>{
                    if(team.name == element.playerOne){
                        team.draw += 1;
                        team.points += 1;
                    }
                    if(team.name == element.playerTwo){
                        team.draw += 1;
                        team.points += 1;
                    }
                })
            }
            if(element.winner != '' && element.winner != 'draw'){
                let winner = element.playerOne == element.winner 
                             ?element.playerOne
                             :element.playerTwo
                let loser = element.playerOne != element.winner 
                             ?element.playerOne
                             :element.playerTwo
                this.teams.forEach((team) => {
                    if(team.name == winner){
                        team.win +=1;
                        team.points +=3;
                        // console.log(team)
                    }
                    if(team.name == loser){
                        team.lose +=1;
                    }
                })
            }
        })
        this.teams.sort((a,b) => {
            if( a.points > b.points){
                return -1;
            }
            if( a.points < b.points){
                return 1;
            }
            return 0;
        })

    }
}