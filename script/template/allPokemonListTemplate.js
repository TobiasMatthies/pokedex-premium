function templatePokemonContainer(index) {
    return `<div class="singlePokemonWrapper">
<<<<<<< HEAD
    <div class="singlePokemonHeader" id="pkmNameBox_${index}">loading</div>
    <div class="wrapper">
=======
    <div class="singlePokemonHeader">1 Bisasam</div>
    <div onclick="openSection('detail', ${index})" class="wrapper">
>>>>>>> f64652e7c4bf3238bb8539965eaf23c5392e4de1
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