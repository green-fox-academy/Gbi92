'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.content.value === '' || form.url.value === '') {
    alert('Please fill all the fields');
    return;
  }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'user_id' : 1},
    body: JSON.stringify({
      title: form.content.value,
      url: form.url.value
    })
  })
  .then(res => res.json())
  .then(data => window.location.href = 'http://localhost:3000/')
});