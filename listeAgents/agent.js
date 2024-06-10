async function afficherAgentDetails(uuid){
    let response = await fetch(`https://valorant-api.com/v1/agents/${uuid}?language=fr-FR`);
    response = await response.json();
    return response;
}

const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get('uuid');

let response = await afficherAgentDetails(uuid);
let data = response.data;

//Row Top
let borderTopLeft = document.querySelector('#borderTopLeft');
let borderTopRight = document.querySelector('#borderTopRight');

    //Left Col
let agentName = document.createElement('h1');
agentName.textContent = (data.displayName);
borderTopLeft.appendChild(agentName);  

let role = document.createElement('h3');
role.textContent = ('//ROLE');
borderTopLeft.appendChild(role);

let flexDiv = document.createElement('div');
flexDiv.className = ('flexDiv');
borderTopLeft.appendChild(flexDiv);

let agentRole = document.createElement('h2');
agentRole.textContent = (data.role.displayName);
flexDiv.appendChild(agentRole);

let roleIcon = document.createElement('img');
roleIcon.setAttribute('src', data.role.displayIcon);
flexDiv.appendChild(roleIcon);

let agentRoleDescription = document.createElement('p');
agentRoleDescription.textContent = (data.role.description);
borderTopLeft.appendChild(agentRoleDescription);

let description = document.createElement('h3');
description.textContent = ('//BIOGRAPHIE');
borderTopLeft.appendChild(description);

let agentDescription = document.createElement('p');
agentDescription.textContent = (data.role.description);
borderTopLeft.appendChild(agentDescription);

    //Right Col
let agentImg = document.createElement('img');
agentImg.setAttribute('src', data.fullPortraitV2);
agentImg.className = ('agentImg');
borderTopRight.appendChild(agentImg);

//Row Bottom
let borderBottomLeft = document.querySelector('#borderBottomLeft');
let borderBottomRight = document.querySelector('#borderBottomRight');

let abilitiesTitle = document.createElement('h2');
abilitiesTitle.textContent = ('SPECIAL ABILITIES');
abilitiesTitle.className = ('abilitiesTitle')
borderBottomLeft.appendChild(abilitiesTitle);

let abilitiesFlex = document.createElement('div');
abilitiesFlex.className = ('abilitiesFlex');
borderBottomLeft.appendChild(abilitiesFlex);

data.abilities.forEach(abilitie => {

    let abilitiesIconDiv = document.createElement('div');
    abilitiesFlex.appendChild(abilitiesIconDiv);
    
    let abilitiesIcon = document.createElement('img');
    abilitiesIcon.setAttribute('src', abilitie.displayIcon);
    abilitiesIcon.className = ('abilitiesIcon');
    abilitiesIconDiv.appendChild(abilitiesIcon);

    abilitiesIcon.addEventListener('click', function(){
        abilitiesIcon.style.filter = ('brightness(100%)')
    })
    
    
    });
    