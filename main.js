const buttonBue = document.querySelector('#btn-bue');
const buttonCancel = document.querySelector('#btn-cancel');
const subscribeWindow = document.querySelector('.questions__subscribe');
const reviewWindow = document.querySelector('.questions__review');
const buttonBueBack = document.querySelector('.questions__subscribe-back');
const buttonReviewBack = document.querySelector('.questions__review-back');
const subscribeForm = document.querySelector('.questions__subscribe-form');
const subscribeBtn = document.querySelector('.questions__subscribe-btn');
// const questionsReview = document.querySelector('.questions__review');
const reviewItemBtns = document.querySelectorAll('.questions__review-item');
const questionsReviewWrapper = document.querySelector('.questions__review-wrapper');
// const questionsSubscribeWrapper = document.querySelector('.questions__subscribe-wrapper');

buttonBue.onclick = function() {
  subscribeWindow.style.display = "block";
}

buttonCancel.onclick = function() {
  reviewWindow.style.display = "block";
}

buttonBueBack.onclick = function() {
  subscribeWindow.style.display = "none";
}

buttonReviewBack.onclick = function() {
  reviewWindow.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == subscribeWindow || event.target == reviewWindow) {
    subscribeWindow.style.display = "none";
    reviewWindow.style.display = "none";
    window.location.reload();
  }
}

subscribeBtn.addEventListener("click", function() {
  subscribeForm.innerHTML = '<div class="questions__subscribe-done">Спасибо, что подписались на нашу рассылку!</div>';
});

const reviewItemHandler = () => {
  questionsReviewWrapper.innerHTML = '<div class="questions__review-done">Спасибо, что поделились!</div>';
};

for (let i = 0; reviewItemBtns.length; i++) {
  reviewItemBtns[i].addEventListener("click", reviewItemHandler)
};

