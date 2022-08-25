function templatePokemonContainer(index) {
    return `<div class="singlePokemonWrapper">
    <div class="singlePokemonHeader">1 Bisasam</div>
    <div onclick="openSection('detail'), initDetail(${index})" class="wrapper">
        <div class="lightCircle"></div>
        <div class="innerCircle1"></div>
        <div class="innerCircle2"></div>
        <div class="pokemonContent" id="pkmContentBox_${index}">
        </div>
    </div>
</div>`;
}