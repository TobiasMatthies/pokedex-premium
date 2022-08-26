let pokemon;
let image;


async function initDetail(i) {
    await loadPokemons(i);
    renderPokemon(i);
}


async function loadPokemons(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}/`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    pokemon = responseAsJson;
}


function renderPokemon(i) {
    document.getElementById('body').innerHTML = '';
    document.getElementById('body').innerHTML += cardTemplate(i);
}

