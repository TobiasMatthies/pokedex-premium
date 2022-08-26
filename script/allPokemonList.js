//let currentLoadedPokemon = 0;
let totalMax = 898;
let max = 898;
let loadingMaximum = 50;
//let loading = false;
let allPokemon = [];
let filteredPokemon = [];
let pageNumber = 1;
let maxPages = 18;


async function initPokemonList(){
    
    renderAllEmptyPokemonContainer();
    await getAllPokemonList(); 
    setMaxPages();
    renderAllPokemonContainerInnerContent();
}

function refreshPokemonList() {
    renderAllEmptyPokemonContainer();
    renderAllPokemonContainerInnerContent();
}


let inputId = "inputPageNumber";

function goToPage(){
    let currentNumber = parseInt(getInputValue());
    if(currentNumber > maxPages){
        currentNumber = maxPages;
    }
    if(currentNumber < 1){
        currentNumber = 1;
    }
    pageNumber = currentNumber;
    setInputValue(pageNumber);
    refreshPokemonList();

}

function previousPage(){
    if(pageNumber > 1){
        pageNumber--;
        setInputValue(pageNumber);
        refreshPokemonList();
    }
}

function nextPage(){
    if(pageNumber < maxPages){
        pageNumber++;
        setInputValue(pageNumber);
        refreshPokemonList();
    }
}

function getInputValue() {
    return document.getElementById("inputPageNumber").value;
}

function setInputValue(value) {
    document.getElementById("inputPageNumber").value = value;
}




async function getAllPokemonList(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${totalMax}&offset=0`;
    let response = await fetch(url);
    let pkm = await response.json();
    allPokemon = pkm.results;
    filteredPokemon = allPokemon;
}

function renderAllPokemonContainerInnerContent() {
    for (let index = loadingMaximum * (pageNumber - 1); index < loadingMaximum * (pageNumber) ; index++) {
        if (index < max) {
            renderPokemonContainerInnerContent(index);
        }
    }
}

function renderAllEmptyPokemonContainer() {
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = '';
    for (let index = loadingMaximum * (pageNumber - 1); index < loadingMaximum * (pageNumber) ; index++) {
        if (index < max) {
            contentContainer.innerHTML += templatePokemonContainer(index);
        }
    }
}

function renderPokemonContainerInnerContent(index) {
    let contentNameContainer = document.getElementById(`pkmNameBox_${index}`);
    contentNameContainer.innerHTML = `${index + 1}  ${filteredPokemon[index].name}`;
    let contentImgContainer = document.getElementById(`pkmImgBox_${index}`);
    contentImgContainer.innerHTML = templatePokemonContainerInnerContent(index);

}


function templatePokemonContainerInnerContent(index) {
    return `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(filteredPokemon[index].url)}.png" alt=""  >`;
}

function getIdFromUrl(url){
    return url.split("/")[6];
}



function filterPokemon(){
    let searchvalue = document.getElementById('inputSearch').value;
    let result = allPokemon.filter(pkm => pkm.name.includes(searchvalue) );
    filteredPokemon = result;
    resetPokemonList();
}

function resetPokemonList(){
    setMaxPages();
    max = filteredPokemon.length;
    pageNumber = 1;
    setInputValue(pageNumber);
    refreshPokemonList();
}

function setMaxPages() {
    maxPages = Math.ceil(filteredPokemon.length / loadingMaximum);
    document.getElementById('inputPageNumber').max = maxPages;
}
