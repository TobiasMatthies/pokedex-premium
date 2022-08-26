
/**
 * 
 * this function returns the html card template for one pokemon.
 * @param {number} i 
 * @returns 
 */
function cardTemplate(i) { //Reihe 1: der Back
    return /*html*/`
<div class="card" id="pokemon$">
    <img onclick="openSection('detail')" class="close_icon pointer" id="close" src="./img/close.svg">
    <div class="left_container">
        <div class="dflex_column description_container">
            <h2 id="main_heading">#${i + 1} ${pokemon['name']}</h2>
            <div class="description" id="description"></div>
        </div>

        <div class="pkmWrapperDetail">
          <img class="pokemon_image" id="pokemon_image${i}" src="${pokemon['sprites']['back_default']}">
          <img class="pokemon_image" id="pokemon_image${i}" src="${pokemon['sprites']['front_default']}">
        </div>
    </div>


    <div class="pokemon_stats" id="stats_container">
        <div class="pokemon_info_wrapper">
            <h2>description</h2>
            <div class="pokemon_info" id="pokemon_info">
            </div>
        </div>

        <div class="stats_wrapper">
            <h2>base stats</h2>
            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][0]['base_stat']}</span>
                    <div class="stat_bar_shadow hp_shadow" id="hp_bar">
                        <div class="stat_bar hp"></div>
                        <span class="stat_span">hp</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][1]['base_stat']}</span>
                    <div class="stat_bar_shadow attack_shadow" id="attack_bar">
                        <div class="stat_bar attack"></div>
                        <span class="stat_span">attack</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][2]['base_stat']}</span>
                    <div class="stat_bar_shadow defense_shadow" id="defense_bar">
                        <div class="stat_bar defense"></div>
                        <span class="stat_span">defense</span>

                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][3]['base_stat']}</span>
                    <div class="stat_bar_shadow sp_atk_shadow" id="sp_atk_bar">
                        <div class="stat_bar sp_atk"></div>
                        <span class="stat_span">sp. atk</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][4]['base_stat']}</span>
                    <div class="stat_bar_shadow sp_def_shadow" id="sp_def_bar">
                        <div class="stat_bar sp_def"></div>
                        <span class="stat_span">sp. def</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][5]['base_stat']}</span>
                    <div class="stat_bar_shadow speed_shadow" id="speed_bar">
                        <div class="stat_bar speed"></div>
                        <span class="stat_span">speed</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${(pokemon['stats'][0]['base_stat'] + pokemon['stats'][1]['base_stat'] + pokemon['stats'][2]['base_stat'] + pokemon['stats'][3]['base_stat'] + pokemon['stats'][4]['base_stat'] + pokemon['stats'][5]['base_stat'])}</span>
                    <div class="stat_bar_shadow total_shadow" id="total_bar">
                        <div class="stat_bar total"></div>
                        <span class="stat_span">total</span>
                    </div>
                </div>
            </div>
        </div>
</div>
         `;
}


function infoTableTemplate() {
    return /*html*/ `
    <table class="pokemon_info_table">
        <tr>
            <td>
                <h5>height</h5>
                <span>${height}</span>
            </td>
            <td>
                <h5>category</h5>
                <span>${category}</span>
            </td>
        </tr>

        <tr>
            <td>
                <h5>weight</h5>
                <span>${weight}</span>
            </td>
            <td>
                <h5>abilities</h5>

                <div class="dflex_column">
                    <span>${abilities[0]['ability']['name']}</span>
                    <span>show all</span>
                </div>
            </td>
        </tr>
    </table>
    `
}