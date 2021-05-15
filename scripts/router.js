// router.js

export const router = {};

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function(state) {
  let page_title = document.querySelector("h1");
  let body = document.body;
  
  //  default journal entries page
  if (state == null) {
    history.pushState(null, "", "/Lab7");  // push / to go back to default url
    page_title.textContent = "Journal Entries";
    body.className = "";
  }
  else if (state.page_title == "Settings") {
    history.pushState(state, "Setting", "#settings");
    page_title.textContent = state.page_title;
    body.className = state.className;
  }
  // individual entry page
  else {
    history.pushState(state, state.page_title, state.page_hash);
    page_title.textContent = state.page_title;
    body.className = state.className;
    // populate entry stuff
    let entry_page = document.querySelector("entry-page");
    entry_page.remove();
    entry_page = document.createElement("entry-page");
    document.body.appendChild(entry_page);
    entry_page.entry = state.entry_data;
    
  }  
}


