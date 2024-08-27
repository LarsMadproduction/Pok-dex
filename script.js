function init() {
  loadingSpinner();
  getPokeData();
}

let pokemonLimit = 30;
let pokemonOffset = 0;
let allPokemon = [];
let allPokemonID = [];

async function getPokeData() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}&offset=${pokemonOffset}`);
  let pokemon = await response.json();
  loadAll(pokemon);
}

function loadAll(pokemon) {    
  for (let allPokeIndex = 0; allPokeIndex < pokemon["results"].length; allPokeIndex++) {
    let url = pokemon["results"][allPokeIndex].url;    
    allPokemonID.push(allPokeIndex);
    document.getElementById("content").innerHTML = "";
    getEachPokeData(url, allPokeIndex); 
  }
}

async function getEachPokeData(url, allPokeIndex) {
  let response = await fetch(url);
  let poke = await response.json();
  allPokemon.push(poke);
  document.getElementById("content").innerHTML += pokecardFront(allPokeIndex);
}