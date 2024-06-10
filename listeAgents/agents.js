async function afficherAgents(){
    let response = await fetch('https://valorant-api.com/v1/agents?language=fr-FR');
    response = await response.json();
    return response;
}
let response = await afficherAgents();
let data = response.data;

data.forEach(agents => {
    
    if(agents.isPlayableCharacter === true){
        
        let rowElement = document.querySelector("#rowElement");

        //DIV COL
        let colAgents = document.createElement('div');
        colAgents.classList.add('col-lg-3', 'col-6');
        rowElement.appendChild(colAgents);

        // LIEN A
        let linkAgents = document.createElement('a');
        linkAgents.setAttribute('href', `agent.html?uuid=${agents.uuid}`);
        colAgents.appendChild(linkAgents);

        //DIV CARD
        let agentsCard = document.createElement('div');
        agentsCard.className = ('agentsCard');
        linkAgents.appendChild(agentsCard);

        //DIV TOP
        let topElement = document.createElement('div');
        topElement.className = ('topElement');
        agentsCard.appendChild(topElement);

        let agentsImg = document.createElement('img');
        agentsImg.setAttribute('src', agents.fullPortraitV2);
        agentsImg.className = ('agentsImg')
        topElement.appendChild(agentsImg);

        //DIV BOTTOM
        let bottomElement = document.createElement('div');
        bottomElement.className = ('bottomElement');
        agentsCard.appendChild(bottomElement);

        let AgentsTitle = document.createElement('h2');
        AgentsTitle.textContent = (agents.displayName);
        bottomElement.appendChild(AgentsTitle);



    }
});