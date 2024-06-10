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

let agentDescription = document.createElement('p');
agentDescription.textContent = (data.description);
agentDescription.className = ('my-4')
borderTopLeft.appendChild(agentDescription);

let borderRole = document.createElement('div');
borderRole.className = ('borderRole');
borderTopLeft.appendChild(borderRole);

let contentRole = document.createElement('div');
contentRole.className = ('contentRole');
borderRole.appendChild(contentRole);

let roleIcon = document.createElement('img');
roleIcon.setAttribute('src', data.role.displayIcon);
roleIcon.className = ('roleIcon');
contentRole.appendChild(roleIcon);

let role = document.createElement('p');
role.textContent = ("Role");
contentRole.appendChild(role);

let agentRole = document.createElement('p');
agentRole.textContent = (data.role.displayName);
agentRole.style.color = "#FF4655";
contentRole.appendChild(agentRole);



    //Right Col
let agentImg = document.createElement('img');
agentImg.setAttribute('src', data.fullPortraitV2);
agentImg.className = ('agentImg');
borderTopRight.appendChild(agentImg);

//Row Bottom
let borderBottomLeft = document.querySelector('#borderBottomLeft');
let borderBottomRight = document.querySelector('#borderBottomRight');

    //COL LEFT
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
    abilitiesIcon.className = 'abilitiesIcon';
    abilitiesIconDiv.appendChild(abilitiesIcon);

    abilitiesIcon.addEventListener('click', function() {
        // Réinitialiser la luminosité de toutes les icônes
        document.querySelectorAll('.abilitiesIcon').forEach(icon => {
            icon.style.filter = 'brightness(50%)';
        });
        // Mettre en évidence l'icône cliquée
        abilitiesIcon.style.filter = 'brightness(100%)';

        // Effacer le contenu actuel de borderBottomRight
        borderBottomRight.textContent = '';

        // Afficher uniquement l'abilitie sélectionnée
        let abilitiesName = document.createElement('h3');
        abilitiesName.textContent = abilitie.displayName;
        borderBottomRight.appendChild(abilitiesName);

        let abilitiesDesc = document.createElement('p');
        abilitiesDesc.textContent = abilitie.description;
        borderBottomRight.appendChild(abilitiesDesc);
    });
});
    
    