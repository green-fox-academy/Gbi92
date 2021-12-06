'use strict';

const section = document.querySelector('section');

fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => {
  data.posts.forEach(el => {
    const article = document.createElement('article');

    const vote = document.createElement('div');
    vote.className = 'vote';

    const score = document.createElement('p');
    score.innerText = el.score;
    score.className = 'score';

    const upvote = document.createElement('img');
    upvote.setAttribute('src', '../assets/upvote.png');
    upvote.addEventListener('click', () => {
      fetch(`http://localhost:3000/posts/${el.id}/upvote`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(scoreData => {
        score.innerText = scoreData.score;
        upvote.setAttribute('src', '../assets/upvoted.png');
      })
    });

    const downvote = document.createElement('img');
    downvote.setAttribute('src', '../assets/downvote.png');
    downvote.addEventListener('click', () => {
      fetch(`http://localhost:3000/posts/${el.id}/downvote`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(scoreData => {
        score.innerText = scoreData.score;
        downvote.setAttribute('src', '../assets/downvoted.png');
      })
    });

    const post = document.createElement('div');
    post.className = 'post';
    const title = document.createElement('p');
    title.className = 'title';
    title.innerHTML = `${el.title} <a href="${el.url}" class="url">(${el.url})</a>`;
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
