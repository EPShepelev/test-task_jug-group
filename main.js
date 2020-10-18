const buttonBue = document.querySelector('#btn-bue');
const buttonCancel = document.querySelector('#btn-cancel');
const subscribeWindow = document.querySelector('.questions__subscribe');
const reviewWindow = document.querySelector('.questions__review');
const buttonBueBack = document.querySelector('.questions__subscribe-back');
const buttonReviewBack = document.querySelector('.questions__review-back');
const subscribeForm = document.querySelector('.questions__subscribe-form');
const subscribeBtn = document.querySelector('.questions__subscribe-btn');
const questionsReview = document.querySelector('.questions__review');
const reviewItemBtns = document.querySelectorAll('.questions__review-item');

const questionsSubscribeWrapper = document.querySelector('.questions__subscribe-wrapper');
// const questionsReviewWrapper = document.querySelector('.questions__review-wrapper');


buttonBue.addEventListener("click", function() {
  subscribeWindow.classList.remove('hidden')
  subscribeWindow.classList.add('questions__subscribe-visible')
});

buttonCancel.addEventListener("click", function() {
   reviewWindow.classList.remove('hidden')
   reviewWindow.classList.add('questions__review-visible')
});

buttonBueBack.addEventListener("click", function() {
  subscribeWindow.classList.remove('questions__subscribe-visible')
  subscribeWindow.classList.add('hidden')
});

buttonReviewBack.addEventListener("click", function() {
  reviewWindow.classList.remove('questions__review-visible')
  reviewWindow.classList.add('hidden')
});

subscribeBtn.addEventListener("click", function() {
  subscribeForm.innerHTML = '<div class="questions__subscribe-sucsess">Спасибо, что подписались на нашу рассылку!</div>';
});

const reviewItemHandler = () => {
  questionsReview.innerHTML = '<div class="questions__review-sucsess">Спасибо, что поделились!</div>';
};

for (let i = 0; reviewItemBtns.length; i++) {
  reviewItemBtns[i].addEventListener("click", reviewItemHandler)
};

window.onclick = function(event) {
  if (event.target == questionsSubscribeWrapper) {
    questionsSubscribeWrapper.style.display = "none";
  }
}
