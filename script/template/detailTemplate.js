
/**
 * 
 * this function returns the html card template for one pokemon.
 * @param {number} i 
 * @returns 
 */
 function cardTemplate(i) { //Reihe 1: der Back
    return /*html*/`
<div class="card" id="pokemon${i}">
    <img onclick="openSection('detail')" class="close_icon pointer" id="close${i}" src="./img/close.svg">
    <div class="left_container">
        <div class="pokemon_info_general" id="pokemon_info_general${i}">
            <h2 id="main_heading">#${number} ${pokemon['name']}</h2>
        </div>
        <img class="pokemon_image" id="pokemon_image${i}" src="${pokemon['sprites']['other']['dream_world']['front_default']}">
    </div>


    <div class="pokemon_stats" id="stats_container${i}">
        <div class="description_wrapper">
            <h2>description</h2>
            <div class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit fugit aliquam fugiat
                perspiciatis laborum quibusdam soluta, autem perferendis! Natus repudiandae accusantium qui sint
                doloremque placeat eveniet fugit reiciendis recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit fugit aliquam fugiat
                perspiciatis laborum quibusdam soluta, autem perferendis! Natus repudiandae accusantium qui sint
                doloremque placeat eveniet fugit reiciendis recusandae.
            </div>
        </div>

        <div class="stats_wrapper">
            <h2>base stats</h2>
            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][0]['base_stat']}</span>
                    <div class="stat_bar_shadow hp_shadow" id="hp_bar${i}">
                        <div class="stat_bar hp"></div>
                        <span class="stat_span">hp</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][1]['base_stat']}</span>
                    <div class="stat_bar_shadow attack_shadow" id="attack_bar${i}">
                        <div class="stat_bar attack"></div>
                        <span class="stat_span">attack</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][2]['base_stat']}</span>
                    <div class="stat_bar_shadow defense_shadow" id="defense_bar${i}">
                        <div class="stat_bar defense"></div>
                        <span class="stat_span">defense</span>

                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][3]['base_stat']}</span>
                    <div class="stat_bar_shadow sp_atk_shadow" id="sp_atk_bar${i}">
                        <div class="stat_bar sp_atk"></div>
                        <span class="stat_span">sp. atk</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][4]['base_stat']}</span>
                    <div class="stat_bar_shadow sp_def_shadow" id="sp_def_bar${i}">
                        <div class="stat_bar sp_def"></div>
                        <span class="stat_span">sp. def</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${pokemon['stats'][5]['base_stat']}</span>
                    <div class="stat_bar_shadow speed_shadow" id="speed_bar${i}">
                        <div class="stat_bar speed"></div>
                        <span class="stat_span">speed</span>
                    </div>
                </div>
            </div>

            <div class="stat_container">
                <div class="stat_bar_container">
                    <span class="stat_value">${(pokemon['stats'][0]['base_stat'] + pokemon['stats'][1]['base_stat'] + pokemon['stats'][2]['base_stat'] + pokemon['stats'][3]['base_stat'] + pokemon['stats'][4]['base_stat'] + pokemon['stats'][5]['base_stat'])}</span>
                    <div class="stat_bar_shadow total_shadow" id="total_bar${i}">
                        <div class="stat_bar total"></div>
                        <span class="stat_span">total</span>
                    </div>
                </div>
            </div>
        </div>
</div>
         `;
}