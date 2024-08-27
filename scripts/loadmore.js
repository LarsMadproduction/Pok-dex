function loadMorePokemon(){
    document.getElementById('spinner').classList.remove('d_none');
    document.getElementById('content').classList.add('d_none');
    loadingSpinner();
    pokemonLimit += 30;
    allPokemon = [];
    getPokeData();
}

function loadingSpinner(){
    setTimeout(showContent, 1000);
}

function showContent(){
    document.getElementById('spinner').classList.add('d_none');
    document.getElementById('content').classList.remove('d_none');
}