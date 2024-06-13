async function afficherAgents(){
    let response = await fetch('https://valorant-api.com/v1/agents?language=fr-FR');
    response = await response.json();
    return response;
}
let response = await afficherAgents();
let data = response.data;

// Fonction pour créer la carte d'un agent
function createAgentCard(agent) {
    let rowAgents = document.querySelector("#rowAgents");

    // DIV COL
    let colAgents = document.createElement('div');
    colAgents.classList.add('col-lg-3', 'col-6');
    rowAgents.appendChild(colAgents);

    // LIEN A
    let linkAgents = document.createElement('a');
    linkAgents.setAttribute('href', `agent.html?uuid=${agent.uuid}`);
    colAgents.appendChild(linkAgents);

    // DIV CARD
    let agentsCard = document.createElement('div');
    agentsCard.className = 'agentsCard';
    linkAgents.appendChild(agentsCard);

    // DIV TOP
    let topElement = document.createElement('div');
    topElement.className = 'topElement';
    agentsCard.appendChild(topElement);

    let agentsImg = document.createElement('img');
    agentsImg.setAttribute('src', agent.fullPortraitV2);
    agentsImg.className = 'agentsImg';
    topElement.appendChild(agentsImg);

    // DIV BOTTOM
    let bottomElement = document.createElement('div');
    bottomElement.className = 'bottomElement';
    agentsCard.appendChild(bottomElement);

    let agentsTitle = document.createElement('h2');
    agentsTitle.textContent = agent.displayName;
    bottomElement.appendChild(agentsTitle);

    let agentsRole = document.createElement('img');
    agentsRole.setAttribute('src', agent.role.displayIcon);
    bottomElement.appendChild(agentsRole);
}

// Fonction pour afficher les agents en fonction du rôle
function displayAgentsByRole(role) {
    // Vide le contenu précédent
    let rowAgents = document.querySelector("#rowAgents");
    rowAgents.innerHTML = '';

    // Filtre et affiche les agents selon le rôle sélectionné
    data.forEach(agent => {
        if (agent.isPlayableCharacter && agent.role.displayName === role) {
            createAgentCard(agent);
        }
    });
}

// Fonction pour réinitialiser tous les filtres de luminosité
function resetBrightnessFilter() {
    document.querySelectorAll('.roleSearchLogo img').forEach(img => {
        img.classList.remove('active');
    });
}

// Fonction pour gérer le clic sur un logo
function handleRoleClick(event, role) {
    resetBrightnessFilter();
    event.currentTarget.querySelector('img').classList.add('active');
    displayAgentsByRole(role);
}

// Ajout des écouteurs d'événements sur chaque logo de rôle
document.querySelector('#initiateurRole').addEventListener('click', (event) => {
    handleRoleClick(event, 'Initiateur');
});

document.querySelector('#controleurRole').addEventListener('click', (event) => {
    handleRoleClick(event, 'Contrôleur');
});

document.querySelector('#duellisteRole').addEventListener('click', (event) => {
    handleRoleClick(event, 'Duelliste');
});

document.querySelector('#sentinelleRole').addEventListener('click', (event) => {
    handleRoleClick(event, 'Sentinelle');
});








// Afficher tous les agents au chargement de la page
data.forEach(agent => {
    if (agent.isPlayableCharacter) {
        createAgentCard(agent);
    }
});
