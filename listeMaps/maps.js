async function afficherMaps(){
    let response = await fetch('https://valorant-api.com/v1/maps')
    response = await response.json();
    return response;
}
let response = await afficherMaps();
let data = response.data;

data.forEach(maps => {
    
    let rowElement = document.querySelector('#rowElement');

    let colElement = document.createElement('div');
    colElement.classList.add('col-lg-3', 'col-6')
    rowElement.appendChild(colElement);

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkElement.style.backgroundImage = `url(${maps.splash})`;
    linkElement.className = ('linkMaps');
    colElement.appendChild(linkElement);

    let titleElement = document.createElement('h2');
    titleElement.className = ('h2-link');
    titleElement.textContent = (maps.displayName)
    linkElement.appendChild(titleElement);
});