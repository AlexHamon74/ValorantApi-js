async function afficherArmes(){
    let response = await fetch('https://valorant-api.com/v1/weapons?language=fr-FR')
    response = await response.json();
    return response;
}
let response = await afficherArmes();
let data = response.data;

// Fonction pour créer la carte d'une arme
function createWeaponCard(armes) {
    let rowElement = document.querySelector('#rowElement');

    // COL
    let colElement = document.createElement('div');
    colElement.classList.add('col-lg-4', 'col-md-6', 'col-12');
    rowElement.appendChild(colElement);

    // Weapons CARD
    let weaponsCard = document.createElement('div');
    weaponsCard.className = ('weaponsCard');
    colElement.appendChild(weaponsCard);

    // Weapons bg
    let weaponsBg = document.createElement('div');
    weaponsBg.className = ('weaponsBg');
    weaponsCard.appendChild(weaponsBg);

    let weaponsImg = document.createElement('img');
    weaponsImg.setAttribute('src', armes.displayIcon);
    weaponsImg.className = ('weaponsImg');
    weaponsBg.appendChild(weaponsImg);

    let weaponsName = document.createElement('h2');
    weaponsName.textContent = (armes.displayName + '.');
    weaponsName.className = ('weaponsName');
    weaponsCard.appendChild(weaponsName);

    let weaponsCategory = document.createElement('h3');
    weaponsCategory.className = ('weaponsCategory');
    weaponsCategory.textContent = ('TYPES // ' + armes.shopData.categoryText);
    weaponsCard.appendChild(weaponsCategory);

    let damageDiv = document.createElement('div');
    damageDiv.className = ('damageDiv');
    weaponsBg.appendChild(damageDiv);

    armes.weaponStats.damageRanges.forEach(damage => {
        let damageDivChild = document.createElement('div');
        damageDivChild.className = ('mb-3');
        damageDiv.appendChild(damageDivChild);

        let damageMeters = document.createElement('h4');
        damageMeters.className = ('damageMeters');
        damageMeters.textContent = ('Distance : ' + damage.rangeStartMeters + 'm' + ' à ' + damage.rangeEndMeters + 'm');
        damageDivChild.appendChild(damageMeters);

        let roundedHeadDamage = Math.round(damage.headDamage);
        let roundedBodyDamage = Math.round(damage.bodyDamage);
        let roundedLegDamage = Math.round(damage.legDamage);

        let headDamage = document.createElement('p');
        headDamage.className = ('damageFullBody');
        headDamage.textContent = ('Tête :  -' + roundedHeadDamage + ' | ' + 'Corps :  -' + roundedBodyDamage + ' | ' + 'Jambes :  -' + roundedLegDamage);
        damageDivChild.appendChild(headDamage);
    });
}

// Fonction pour afficher les armes en fonction du type
function displayWeaponsByType(type) {
    // Vide le contenu précédent
    let rowElement = document.querySelector("#rowElement");
    rowElement.textContent = '';

    // Filtre et affiche les armes selon le type sélectionné
    data.forEach(armes => {
        if (type === 'all' || armes.shopData.categoryText === type) {
            createWeaponCard(armes);
        }
    });
}

//Fonction pour gérer le changement de sélection dans le menu déroulant
document.querySelector('#weaponsSelect').addEventListener('change', function(event) {
    let selectedType = event.target.value;
    displayWeaponsByType(selectedType);
});

// Afficher toutes les armes au chargement de la page
displayWeaponsByType('all');
