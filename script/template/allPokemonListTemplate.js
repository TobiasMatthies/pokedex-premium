function templatePokemonContainer(index) {
    return `<div class="singlePokemonWrapper">
    <div class="singlePokemonHeader" id="pkmNameBox_${index}">loading</div>
    <div onclick="openSection('detail', ${index})" class="wrapper">
        <div class="lightCircle"></div>
        <div class="innerCircle1"></div>
        <div class="innerCircle2"></div>
        <div class="pokemonContent" id="pkmImgBox_${index}">
        </div>
    </div>
</div>`;
}

function templatePokemonContainerInnerContent(index) {
    return `<img src="${allPokemon[index].img}" alt=""  >`;
}