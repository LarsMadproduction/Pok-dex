let pokemonLimit = 30;
let pokemonOffset = 0;
let allPokemon = [];
let showPokemons = [];
let pokemonID = [];

function init() {
  loadingSpinner();
  getPokeData();
  document.getElementById('inputField').innerHTML += inputTemplate()
}

async function getPokeData() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}&offset=${pokemonOffset}`);
  let pokemon = await response.json();
  loadAll(pokemon);
}

async function loadAll(pokemon) {  
  document.getElementById("content").innerHTML = "";  
  for (let allPokeIndex = 0; allPokeIndex < pokemon["results"].length; allPokeIndex++) {
    let url = pokemon["results"][allPokeIndex].url;
    await getEachPokeData(url, allPokeIndex);
    pokemonID.push(allPokeIndex)
  }
  loadingSpinner()
}

async function getEachPokeData(url, allPokeIndex) {
  let response = await fetch(url);
  let poke = await response.json();
  allPokemon.push(poke);
  document.getElementById("content").innerHTML += pokecardFront(allPokeIndex);
}