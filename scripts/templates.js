function pokecardFront(poke) {
  return `<div class="pokecard_front">
            <div>
                <h2>${poke.name}</h2>
                <span>#${poke.id}</span>
            </div>
            <div><img src="${poke.sprites.other.dream_world.front_default}" alt="Pokemon" /></div>
            <div id="pokeType"></div>
         </div>`;
}

function pokecardFrontType(typeIcon){
  return`<img class="type_img" src="${typeIcon}" alt="Type" />`
}
