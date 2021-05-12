// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
window.onpopstate = function(event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}
let settings_img = document.querySelector("img");

  settings_img.addEventListener('click', () => {
    let title = document.querySelector('h1');
    let body = document.querySelector("body");
    body.className = "settings";
    setState(title.textContent, );
    
    
  
    
    console.log(history.state);
  });
setState();
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
