function pokecardFront(poke, allPokeIndex) {
  return `<div onclick="openOverlay(${allPokeIndex})" class="pokecard_front">
            <div class="card_header">
                <h2>${poke.name}</h2>
                <span>#${poke.id}</span>
            </div>
            <div class="pokemon_img"><img src="${poke.sprites.other.dream_world.front_default}" alt="Pokemon" /></div>
            <div id="pokeType${allPokeIndex}"></div>
         </div>`
}

function pokecardFrontType(firstType, secondType ){
  if (secondType == undefined) {
    return`<div class="card_type"><span>Type: ${firstType}</span></div>`
  }else{
    return`<div class="card_type"><span>Type: ${firstType} ${secondType}</span></div>`
  }
}

// function pokeCardOverlay(poke, allPokeIndex){
//   return `<div onclick="openOverlay(${allPokeIndex})" class="pokecard_front">
//             <div class="card_header">
//                 <h2>${poke.name}</h2>
//                 <span>#${poke.id}</span>
//             </div>
//             <div class="pokemon_img"><img src="${poke.sprites.other.dream_world.front_default}" alt="Pokemon" /></div>
//             <div id="pokeType${allPokeIndex}"></div>
//          </div>`
// }