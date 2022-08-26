let currentLoadedPokemon = 0;
let max = 898;
let loadingMaximum = 20;
let loading = false;
let allPokemon = [];

let front= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";
let back= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/3.png";

// async function getPokemon(index) {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
//     let pkm = await response.json();
//     return pkm;
// }

async function showAllPokemon(){
    renderAllEmptyPokemonContainer();
    await getAllPokemonList();
    console.log(allPokemon);
    renderAllPokemonContainerInnerContent();
}

async function loadAllPokemon(){
    renderNextPokemons();
    let allpkm = await getAllPokemonList();
    allpkm.forEach((element, index) => {
        allPokemon.push({
            id: index + 1,
            name: element.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        })
    });
    return allPokemon;
}

async function getAllPokemonList(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;
    let response = await fetch(url);
    let pkm = await response.json();
    return pkm.results;
}

function renderAllPokemonContainerInnerContent() {
    for (let index = loadingMaximum - 20; index <= loadingMaximum; index++) {
        renderPokemonContainerInnerContent(index);
    }
}

function renderAllEmptyPokemonContainer() {
    let contentContainer = document.getElementById("content");
    for (let index = loadingMaximum - 20; index <= loadingMaximum; index++) {
        contentContainer.innerHTML += templatePokemonContainer(index);
    }
}

function renderPokemonContainerInnerContent(index) {
    let contentNameContainer = document.getElementById(`pkmNameBox_${index}`);
    contentContainer.innerHTML = `${allPokemon[index].id}  ${allPokemon[index].name}`;
    let contentImgContainer = document.getElementById(`pkmImgBox_${index}`);
    contentContainer.innerHTML = templatePokemonContainerInnerContent(index);
}