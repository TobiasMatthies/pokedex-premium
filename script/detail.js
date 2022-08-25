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
}


function renderPokemons() {
    document.getElementById('body').innerHTML += cardTemplate(number);
}

