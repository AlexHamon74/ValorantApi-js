async function afficherAgents(){
    let response = await fetch('https://valorant-api.com/v1/agents');
    response = await response.json();
    return response;
}
let response = await afficherAgents();
let data = response.data;

data.forEach(agents => {

    if(agents.isPlayableCharacter === true){
        
        let rowElement = document.querySelector("#rowElement");

        let colElement = document.createElement('div');
        colElement.classList.add('col-lg-3', 'col-md-6', 'colAgents', 'mb-5');
        rowElement.appendChild(colElement);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', 'test');
        linkElement.className = ("linkAgents");
        linkElement.style.backgroundImage = `url(${agents.displayIcon})`;
        colElement.appendChild(linkElement);

        let titleElement = document.createElement('h2');
        titleElement.textContent = (agents.displayName);
        titleElement.className = ("titleAgents")
        linkElement.appendChild(titleElement);

    }

});