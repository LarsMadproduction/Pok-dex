function pokecardFront(allPokeIndex) {
  return `<div onclick="openOverlay(${allPokeIndex})"class="pokecard_front ${allPokemon[allPokeIndex].types[0].type.name}">
            <div class="card_header">
                <h2>${allPokemon[allPokeIndex].name}</h2>
                <span>#${allPokemon[allPokeIndex].id}</span>
            </div>
            <div class="pokemon_img_size"><img class="pokemon_img" src="${allPokemon[allPokeIndex].sprites.other.dream_world.front_default}" alt="Pokemon" /></div>
            <div class="card_type_size" id="pokeType${allPokeIndex}">
              <div class="card_type ${allPokemon[allPokeIndex].types[0].type.name}_img"></div>
              <div class="card_type ${allPokemon[allPokeIndex].types[1]?.type.name || ''}_img"></div>
            </div>
         </div>`
}

function pokeCardOverlay(allPokeIndex){
  return `<div class="card_overlay ${allPokemon[allPokeIndex].types[0].type.name}">
            <div class="card_header">
                <h2>${allPokemon[allPokeIndex].name}</h2>
                <span>#${allPokemon[allPokeIndex].id}</span>
            </div>
            <div class="pokemon_img_size_overlay"><img class="pokemon_img_overlay" src="${allPokemon[allPokeIndex].sprites.other.showdown.front_default}" alt="Pokemon" /></div>
            <div class="order_links">  
              <div class="hover_sas" onclick="showStats(${allPokeIndex})">Stats</div>
              <div class="hover_sas" onclick="showAbilities(${allPokeIndex})">Abilities</div>
              <div class="hover_sas" onclick="showShiny(${allPokeIndex})">Shiny</div>
            </div>
            <div class="show_sas" id="showSas"></div>
         </div>`
}

function showStatsTemplate(allPokeIndex){
  return  `<div>
          <div>${allPokemon[allPokeIndex].stats[0].stat.name}: ${allPokemon[allPokeIndex].stats[0].base_stat}</div>
          <div>${allPokemon[allPokeIndex].stats[1].stat.name}: ${allPokemon[allPokeIndex].stats[1].base_stat}</div>
          <div>${allPokemon[allPokeIndex].stats[2].stat.name}: ${allPokemon[allPokeIndex].stats[2].base_stat}</div>
          <div>${allPokemon[allPokeIndex].stats[3].stat.name}: ${allPokemon[allPokeIndex].stats[3].base_stat}</div>
          <div>${allPokemon[allPokeIndex].stats[4].stat.name}: ${allPokemon[allPokeIndex].stats[4].base_stat}</div>
          <div>${allPokemon[allPokeIndex].stats[5].stat.name}: ${allPokemon[allPokeIndex].stats[5].base_stat}</div>
          </div>`
}

function showAbilitiesTemplate(allPokeIndex){
  return  `<div>
          <div>Ability 1: ${allPokemon[allPokeIndex].moves[2].move.name}</div>
          <div>Ability 2: ${allPokemon[allPokeIndex].moves[4]?.move.name || ''}</div>
          <div>Height: ${allPokemon[allPokeIndex].height}|Weight: ${allPokemon[allPokeIndex].weight}</div>
          <div></div>
          </div>`
}

function showShinyTemplate(allPokeIndex){
  return  `<div>
          <div class="pokemon_img_shiny_size"><img class="pokemon_img_shiny" src="${allPokemon[allPokeIndex].sprites.other.home.front_shiny}" alt="Pokemon" /></div>
          </div>`
}