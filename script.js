async function afficherAgents(){
    let response = await fetch('https://valorant-api.com/v1/agents');
    response = await response.json();
    return response;
}
let response = await afficherAgents();
let data = response.data;

data.forEach(agents => {

    if(agents.isPlayableCharacter===true){
        
        

    }

});