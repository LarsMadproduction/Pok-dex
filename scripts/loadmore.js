function loadMorePokemon() {
  document.getElementById("loadMore").classList.add("d_none");
  document.getElementById("spinner").classList.remove("d_none");
  document.getElementById("content").classList.add("d_none");
  loadingSpinner();
  pokemonLimit += 30;
  allPokemon = [];
  getPokeData();
}

function loadingSpinner() {
  setTimeout(showContent, 3000);
}

function showContent() {
  document.getElementById("spinner").classList.add("d_none");
  document.getElementById("content").classList.remove("d_none");
  document.getElementById("loadMore").classList.remove("d_none");
}

function searchPokemon() {
  let searchPokemon = document.getElementById("searchPokemon").value;
  for (let j = 0; j < pokemonID.length; j++) {
    let PokeID = pokemonID[j];
    let card = document.getElementById(`card${PokeID}`);
    let txtValue = card.innerText || card.innerHTML;
    if (searchPokemon.length >= 3) {
      document.getElementById("warning").classList.add("d_none");
      let filter = searchPokemon.toUpperCase();
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card.classList.remove("d_none");
      } else {
        card.classList.add("d_none");
      }
    } else if (searchPokemon.length < 3) {
      document.getElementById(`card${PokeID}`).classList.remove("d_none");
      document.getElementById("warning").classList.remove("d_none");
    }
  }
}