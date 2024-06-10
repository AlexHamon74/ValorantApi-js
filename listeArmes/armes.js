async function afficherArmes(){
    let response = await fetch('https://valorant-api.com/v1/weapons?language=fr-FR')
    response = await response.json();
    return response;
}
let response = await afficherArmes();
let data = response.data;

data.forEach(armes => {
    
    let rowElement = document.querySelector('#rowElement');

    //COL
    let colElement = document.createElement('div');
    colElement.classList.add('col-lg-4');
    rowElement.appendChild(colElement);

    //Weapons CARD
    let weaponsCard = document.createElement('div');
    weaponsCard.className = ('weaponsCard');
    colElement.appendChild(weaponsCard);

    //Weapons Icon
    let weaponsIcon = document.createElement('div');
    weaponsIcon.className = ('weaponsIcon');
    weaponsCard.appendChild(weaponsIcon);

    let weaponsImg = document.createElement('img');
    weaponsImg.setAttribute('src', armes.displayIcon);
    weaponsImg.className = ('weaponsImg');
    weaponsIcon.appendChild(weaponsImg);

    let weaponsName = document.createElement('h2');
    weaponsName.textContent = (armes.displayName + '.');
    weaponsName.className = ('weaponsName');
    weaponsCard.appendChild(weaponsName);


    let weaponsCategory = document.createElement('h3');
    weaponsCategory.className = ('weaponsCategory');
    weaponsCategory.textContent = ('TYPES // ' + armes.shopData.categoryText);
    weaponsCard.appendChild(weaponsCategory);

});