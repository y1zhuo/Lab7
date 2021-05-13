// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

window.onpopstate = function(event) {
  //console.log(event.state);
  let page_title = document.querySelector("h1");
  let body = document.body;
  if (event.state) { // previous page was not default page
    page_title.textContent = event.state.page_title;
    body.className = event.state.className;
    //if (event.state.entry)
  }
  else {
    page_title.textContent = "Journal Entries";
    body.className = "";
  }
}

let settings_img = document.querySelector("img");

settings_img.addEventListener('click', () => {
  let state = {page_title: "Settings", className: "settings"};
  setState(state);
});


function entrySetup() {
  let entries = document.getElementsByTagName('journal-entry');
  //console.log(entries[0].entry);
  for (let i = 0; i < entries.length; i++){
    entries[i].addEventListener('click', ()=>{
      let state = {page_title: "Entry " + (i+1), className: "single-entry", page_hash: "#entry" + (i+1), entry_data: entries[i].entry};
      //console.log(state);
      setState(state);
    })
  }
}

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
    })
    .then(entrySetup); // wait for journal entries to be added before trying to mess with them
});

