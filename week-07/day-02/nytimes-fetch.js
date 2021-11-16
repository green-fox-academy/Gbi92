'use strict';

const htmlBody = document.querySelector('body');

fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+apollo+11&api-key=W1DjD17euIp8HHqTpM9TdBRtGSYuifZf')
  .then(response => response.json())
  .then(body => {
    console.log(body);
    body.response.docs.forEach(article => {
      const list = document.createElement('ul');
      htmlBody.appendChild(list);

      const headline = document.createElement('li');
      const snippet = document.createElement('li');
      const date = document.createElement('li');

      headline.innerHTML = `<a href="${article.web_url}">${article.headline.main}</a>`;
      snippet.innerText = article.snippet;
      date.innerText = article.pub_date;

      list.appendChild(headline);
      list.appendChild(snippet);
      list.appendChild(date);
    });
  });
