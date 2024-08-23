function init() {
  getPokeData();
  // getTypeData()
}

let pokemonLimit = 30;
let pokemonOffset = 0;
let pokemonType = [];

async function getPokeData() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}&offset=${pokemonOffset}`);
  let pokemon = await response.json();
  console.log(pokemon);
  loadAll(pokemon);
}

function loadAll(pokemon) {
  for (let allPokeIndex = 0; allPokeIndex < pokemon["results"].length; allPokeIndex++) {
    let url = pokemon["results"][allPokeIndex].url;
    getEachPokeData(url, allPokeIndex);
  }
}

async function getEachPokeData(url, allPokeIndex) {
  let response = await fetch(url);
  let poke = await response.json();
  document.getElementById("content").innerHTML += pokecardFront(poke, allPokeIndex);
  pokemonType.push(poke.types)
  setTypes(allPokeIndex);
}

function setTypes(allPokeIndex){
  for (let typeSetIndex = allPokeIndex; typeSetIndex < pokemonType.length; typeSetIndex++) {
    let typeOfEach = pokemonType[typeSetIndex]
    if (typeOfEach.length <= 1) {
      let firstType = typeOfEach[0].type.name
      document.getElementById(`pokeType${allPokeIndex}`).innerHTML += pokecardFrontType(firstType);
    }else{
      let firstType = typeOfEach[0].type.name
      let secondType = typeOfEach[1].type.name
      document.getElementById(`pokeType${allPokeIndex}`).innerHTML += pokecardFrontType(firstType, secondType);
    }
  }
}

// async function getTypeData() {
//   let response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}/`);
//   let pokeType = await response.json();
//   loadAllTypes(pokeType);
// }

// function loadAllTypes(pokeType){
//     for (let typeIndex = 0; typeIndex < pokeType["results"].length; typeIndex++) {
//         let typeUrl = pokeType["results"][typeIndex].url;
//         getEachTypeData(typeUrl)
//     }
// }

// async function getEachTypeData(typeUrl) {
//     let response = await fetch(typeUrl);
//     let typePokemon = await response.json();
//     let typeIcon = typePokemon.sprites['generation-viii']['sword-shield'].name_icon
//     document.getElementById("pokeType").innerHTML += pokecardFrontType(typeIcon);
//   }

function openOverlay(){
  let overlayRef = document.getElementById('overlay');
  overlayRef.classList.remove('d_none')
  let cardOverlayRef = document.getElementById('cardOverlay');
  cardOverlayRef.innerHTML = "";
}

function closeOverlay() {
  let overlayRef = document.getElementById('overlay');
  overlayRef.classList.add('d_none');
  let cardOverlayRef = document.getElementById('cardOverlay');
  cardOverlayRef.innerHTML = '';
}

function logDownPrev(event){    
  event.stopPropagation()
}
