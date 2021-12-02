'use strict';

const section = document.querySelector('section');

window.addEventListener('load', () => {
  fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(data => {
    data.posts.forEach(el => {
      const article = document.createElement('article');

      const vote = document.createElement('div');
      vote.className = 'vote';
      const upvote = document.createElement('img');
      upvote.setAttribute('src', '../assets/upvote.png');
      const score = document.createElement('p');
      score.innerText = el.score;
      const downvote = document.createElement('img');
      downvote.setAttribute('src', '../assets/downvote.png');

      const post = document.createElement('div');
      post.className = 'post';
      const title = document.createElement('p');
      title.className = 'title';
      title.innerHTML = `${el.title} <span class="url">(${el.url})</span>`;
      const postInfo = document.createElement('p');
      postInfo.className = 'postInfo';
      postInfo.innerHTML = `submitted <span class="date">${calculatePassedTime(el.timestamp)}</span> days ago by <a href="#">${el.owner}</a>`;

      section.appendChild(article);
      article.appendChild(vote);
      article.appendChild(post);
      vote.appendChild(upvote);
      vote.appendChild(score);
      vote.appendChild(downvote);
      post.appendChild(title);
      post.appendChild(postInfo);
    });
  })
});

