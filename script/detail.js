let pokemon;
let species;
let description;
let image;
let height;
let category;
let weight;
let abilities;


async function initDetail(i) {
    await loadPokemon(i);
    renderPokemon(i);
}


async function loadPokemon(i) {
    await loadPokemonObject(i);
    await loadSpecies(i);
    getInfo();
}


async function loadPokemonObject(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}/`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    pokemon = responseAsJson;
}


async function loadSpecies(i) {
    let speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`;
    let speciesResponse = await fetch(speciesUrl);
    let speciesResponseAsJson = await speciesResponse.json();
    console.log(speciesResponseAsJson);
    species = speciesResponseAsJson;
}


function getInfo() {
    description = species['flavor_text_entries'][0]['flavor_text'];
    height = pokemon[height];
    category = species['genera'][7]['genus'];
    weight = pokemon['weight'];
    abilities = pokemon['abilities'];
}


function renderPokemon(i) {
    document.getElementById('body').innerHTML = '';
    document.getElementById('body').innerHTML += cardTemplate(i);
     document.getElementById('description').innerHTML = '';
    document.getElementById('description').innerHTML = description;
}

