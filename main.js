const buttonBue = document.querySelector("#btn-bue");
buttonBue.addEventListener("click", function() {
  const subscribeWindow = document.querySelector(".questions__subscribe");
  subscribeWindow.classList.remove('hidden')
});

const buttonCancel = document.querySelector("#btn-cancel");
buttonCancel.addEventListener("click", function() {
   const reviewWindow = document.querySelector(".questions__review");
   reviewWindow.classList.remove('hidden')
});