let currentLoadedPokemon = 0;
let max = 898;
let loadingMaximum = 20;
let loading = false;
let allPokemon = [];

let front= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";
let back= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png";

async function getPokemon(index) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    let pkm = await response.json();
    return pkm;
}

async function LoadNextPokemons() {
    currentLoadedPokemon++;
    let pkm = await getPokemon(currentLoadedPokemon);
    allPokemon.push(pkm);
    if (currentLoadedPokemon <= loadingMaximum) {
        await LoadNextPokemons();
    } else {
        loading = false;
        renderAllPokemonContainerInnerContent();
    }
}

function renderAllPokemonContainerInnerContent() {
    for (let index = loadingMaximum - 20; index <= loadingMaximum; index++) {
        renderPokemonContainerInnerContent(index);
    }
}

function renderNextPokemons() {
    if (!loading) {
        loading = true;
        loadingMaximum = currentLoadedPokemon + 20;
        renderEmptyContainer(loadingMaximum - 20, loadingMaximum);
        LoadNextPokemons()
    }
}

function renderEmptyContainer(start, end) {
    let contentContainer = document.getElementById("content");
    for (let index = start; index <= end; index++) {
        contentContainer.innerHTML += templatePokemonContainer(index);
    }
}

function renderPokemonContainerInnerContent(index) {
    let contentContainer = document.getElementById(`pkmContentBox_${index}`);
    contentContainer.innerHTML = templatePokemonContainerInnerContent(index);
}


function templatePokemonContainerInnerContent(index) {
    return `<img src="${allPokemon[index]['sprites']['front_default']}" alt=""  >`;
}

