'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.title.value === '' || form.url.value) {
    alert('Please fill all the fields');
    return;
  }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'user_id' : 2},
    body: JSON.stringify({
      title: form.title.value,
      url: form.url.value
    })
  })
  .then(res => res.json())
  .then(data => data)
});