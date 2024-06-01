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
        colElement.classList.add('col-lg-3', 'col-6');
        rowElement.appendChild(colElement);

        let bgiElement = document.createElement('div');
        bgiElement.className = ('bgiElement');
        colElement.appendChild(bgiElement);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.style.backgroundImage = `url(${agents.killfeedPortrait})`;
        linkElement.className = ("linkAgents");
        bgiElement.appendChild(linkElement);

        let titleElement = document.createElement('h2');
        titleElement.className = ("h2-link")
        titleElement.textContent = (agents.displayName);
        linkElement.appendChild(titleElement);

    }
});