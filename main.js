const buttonBue = document.querySelector('#btn-bue');
buttonBue.addEventListener("click", function() {
  const subscribeWindow = document.querySelector('.questions__subscribe');
  subscribeWindow.classList.remove('hidden')
  subscribeWindow.classList.add('questions__subscribe-visible')
});

const buttonCancel = document.querySelector('#btn-cancel');
buttonCancel.addEventListener("click", function() {
   const reviewWindow = document.querySelector('.questions__review');
   reviewWindow.classList.remove('hidden')
   reviewWindow.classList.add('questions__review-visible')
});

const buttonBueBack = document.querySelector('.questions__subscribe-back');
buttonBueBack.addEventListener("click", function() {
  const subscribeWindow = document.querySelector('.questions__subscribe');
  subscribeWindow.classList.remove('questions__subscribe-visible')
  subscribeWindow.classList.add('hidden')
});

const buttonReviewBack = document.querySelector('.questions__review-back');
buttonReviewBack.addEventListener("click", function() {
  const reviewWindow = document.querySelector('.questions__review');
  reviewWindow.classList.remove('questions__review-visible')
  reviewWindow.classList.add('hidden')
});
