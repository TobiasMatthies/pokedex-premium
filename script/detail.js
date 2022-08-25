let pokemon;
let image;
let number = 3;


async function initDetail() {
    await loadPokemons();
    renderPokemons();
}


async function loadPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon/3/`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    pokemon = responseAsJson;
    renderPokemons();
}

/**
 * 
 * this function renders pokemons, starting at the value of "start", until getting to the value of "end". The difference between those variables is always 20.
 */
function renderPokemons() {
    document.getElementById('body').innerHTML += cardTemplate(number);
}

