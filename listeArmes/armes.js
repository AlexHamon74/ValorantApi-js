async function afficherArmes(){
    let response = await fetch('https://valorant-api.com/v1/weapons?language=fr-FR')
    response = await response.json();
    return response;
}
let response = await afficherArmes();
let data = response.data;

data.forEach(armes => {
    
    let rowElement = document.querySelector('#rowElement');

    let colElement = document.createElement('div');
    colElement.classList.add('col-xl-6', 'colElementArmes');
    rowElement.appendChild(colElement);

    let borderElement = document.createElement('div');
    borderElement.className = ('borderElementArmes');
    colElement.appendChild(borderElement);

    let titleElement = document.createElement('h2');
    titleElement.textContent = (armes.displayName);
    titleElement.className = ('h2-link')
    borderElement.appendChild(titleElement);

    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', armes.displayIcon);
    borderElement.appendChild(imgElement);

    let categoryElement = document.createElement('h3');
    categoryElement.textContent = ('TYPES // ' + armes.shopData.category);
    borderElement.appendChild(categoryElement);

});