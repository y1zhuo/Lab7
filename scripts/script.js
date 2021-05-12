// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

window.onpopstate = function(event) {
  console.log(event.state);
  let page_title = document.querySelector("h1");
  let body = document.body;
  page_title.textContent = event.page_title;
  body.className = event.className;
}


let settings_img = document.querySelector("img");

settings_img.addEventListener('click', () => {
  let state = {page_title: "Settings", className: "settings"};
  setState(state);
});

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
      });
    });
});
