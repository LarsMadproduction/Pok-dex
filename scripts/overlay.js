function openOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.remove("d_none");
  let cardOverlayRef = document.getElementById("cardOverlay");
  cardOverlayRef.innerHTML = "";
}

function closeOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.add("d_none");
  let cardOverlayRef = document.getElementById("cardOverlay");
  cardOverlayRef.innerHTML = "";
}

function logDownPrev(event) {
  event.stopPropagation();
}
