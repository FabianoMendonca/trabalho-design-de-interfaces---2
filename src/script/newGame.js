import championship from '../script/championship.js';

const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (e) =>{
    let champName = document.querySelector('#inputName');
    let champN = document.querySelector('#inputJogadores');
    let form = document.createElement('form');
    let main = document.querySelector('.main');
    
    main.innerText = ''
    
    let div = document.createElement('div');
    div.classList.add('d-flex', 'justify-content-start', 'align-items-center', 'flex-row', 'flex-wrap');
    for (let index = 0; index < champN.value; index++) {
        `<div class="d-flex justify-content-center align-items-center flex-row p-4 gap-2">
            <label for="inputPassword6" class="col-form-label">Jogador1</label>
            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
            </div>`
            let insideDiv = document.createElement('div');
            let labelForInput = document.createElement('label');
            let inputTeamName = document.createElement('input');
            insideDiv.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row', 'p-4', 'gap-2');

            labelForInput.classList.add('col-form-label');
            labelForInput.for = `inputPlayer${index}`
            labelForInput.appendChild(document.createTextNode(`nome${index+1}`))

            inputTeamName.type = 'text';
            inputTeamName.required = true;
            inputTeamName.id = `inputPlayer${index}`
            inputTeamName.classList.add('form-control')

            insideDiv.appendChild(labelForInput);
            insideDiv.appendChild(inputTeamName);
            div.appendChild(insideDiv);
        }
    let submitButtonTeamForm = document.createElement('button');
    submitButtonTeamForm.classList.add('btn', 'btn-dark')    
    submitButtonTeamForm.appendChild(document.createTextNode('Submit'));
    submitButtonTeamForm.addEventListener('click', (event)=>{
        let teamListName = []
        let champ = new championship(champN.value);
        for (let index = 0; index < champN.value; index++) {
            teamListName.push(document.querySelector(`#inputPlayer${index}`).value);
        }
        teamListName.forEach((nome) =>{
            champ.setTeam = nome;
        })
        console.log(champ)
        localStorage.setItem("selected-champ", champName.value);
        let templist = JSON.parse(localStorage.getItem('champList'))
        templist.champ.push(champName.value);
        localStorage.setItem('champList', JSON.stringify(templist))
        champ.createChampionship;
        champ.saveChampionship = champName.value;
        event.preventDefault();
    })


    form.appendChild(div);
    form.appendChild(submitButtonTeamForm);
    main.appendChild(form);
        
    e.preventDefault();
})