'use strict';

const container = document.querySelector('.container');
const form = document.querySelector('form');

fetch('http://localhost:8080/api/questions')
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    const div = document.createElement('div');
    div.className = 'question';

    const p = document.createElement('p');
    p.innerText = element.question;

    const a = document.createElement('a');
    a.setAttribute('data-number', element.id);
    a.className = 'delete';
    a.innerText = 'delete';

    container.appendChild(div);
    div.appendChild(p);
    div.appendChild(a);
  });
})
.catch((err) => console.log(err))

container.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.className === 'delete') {
    fetch(`http://localhost:8080/api/questions/${Number(event.target.dataset.number)}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'} 
    })
    .then(() => window.location.href = 'http://localhost:8080/questions')
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('http://localhost:8080/api/questions', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      question: form.newQuestion.value,
      answers: [
        {
          answer_1: form.one.value,
          is_correct: form.answerOne.checked ? 1 : 0
        },
        {
          answer_2: form.two.value,
          is_correct: form.answerTwo.checked ? 1 : 0
        },
        {
          answer_3: form.three.value,
          is_correct: form.answerThree.checked ? 1 : 0
        },
        {
          answer_4: form.four.value,
          is_correct: form.answerFour.checked ? 1 : 0
        }
      ]
    })
  })
  .then(() => window.location.href = 'http://localhost:8080/questions')
  .catch((err) => console.log(err))
});
