function openOverlay(allPokeIndex) {
  let overlayRef = document.getElementById(`overlay`);
  overlayRef.classList.remove("d_none");
  let cardOverlayRef = document.getElementById(`cardOverlay`);
  cardOverlayRef.innerHTML = "";
  cardOverlayRef.innerHTML += pokeCardOverlay(allPokeIndex);
}

function closeOverlay() {
  let overlayRef = document.getElementById(`overlay`);
  overlayRef.classList.add('d_none');
  let cardOverlayRef = document.getElementById(`cardOverlay`);
  cardOverlayRef.innerHTML = "";
}

function logDownPrev(event) {
  event.stopPropagation();
}

function showStats(allPokeIndex){
  let stats = document.getElementById('showSas')
  stats.innerHTML = "";
  stats.innerHTML += showStatsTemplate(allPokeIndex);
}

function showAbilities(allPokeIndex){
  let abilities = document.getElementById('showSas')
  abilities.innerHTML = "";
  abilities.innerHTML += showAbilitiesTemplate(allPokeIndex);
}

function showShiny(allPokeIndex){
  let shiny = document.getElementById('showSas')
  shiny.innerHTML = "";
  shiny.innerHTML += showShinyTemplate(allPokeIndex);
}

function nextCard(next, allPokeIndex){

  allPokeIndex = (allPokeIndex + next + allPokemon.length) % allPokemon.length;
  openOverlay(allPokeIndex)
}