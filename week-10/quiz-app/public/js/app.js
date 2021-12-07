'use strict';

const question = document.querySelector('.question');
const scoreBoard = document.querySelector('.score');
const answerContainer = document.querySelector('.answers');

let score = 0;

function fetchNewQuestion() {
  fetch('http://localhost:8080/api/game')
  .then(res => res.json())
  .then(data => {
    question.innerText = data.question;
    data.answers.forEach((answer, i) => {
      let currentAnswer = document.querySelector(`.no${i+1}`);
      currentAnswer.innerText = answer['answer_' + (i+1)];
      currentAnswer.setAttribute('data-correctness', answer.is_correct);
      currentAnswer.classList.remove('correct');
      currentAnswer.classList.remove('wrong');
    });
  })
  .catch((error) => console.log(error))
}

window.addEventListener('load', () => {
  fetchNewQuestion();
});

answerContainer.addEventListener('click', (event) => {
  if (Number(event.target.dataset.correctness) === 1) {
    score += 1;
    event.target.classList.add('correct');
    scoreBoard.innerText = `SCORE: ${score}`;
  } else {
    event.target.classList.add('wrong');
  }
  setTimeout(fetchNewQuestion, 1000);
});