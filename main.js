

function getMessage(){
    // Get DOM elements
const postsContainer = document.getElementById("posts");
const api = "https://jsonplaceholder.typicode.com/posts";

/* 
Render post - This function takes an object with an id, userID, title 
and body
*/

const renderPost = ({ id, userId, title, body }) => {
  // Create div container
  const postContent = document.createElement("div");
  // Set id as attribute
  postContent.setAttribute("id", id);
  // Template
  postContent.innerHTML = `
                        <h5>${title}</h5>
                        <p>${body}</p>
                        <small>Author: ${userId}</small>
                      `;
  // Prepend to container
  postsContainer.prepend(postContent);
};

/*
Render error - This function takes an error object and displays it. 
It also sets a timeout to remove it from the DOM  
*/

const renderError = (error) => {
  // Create div for error
  const errorContainer = document.createElement("div");
  // Setting styles via cssText property
  errorContainer.style.cssText = "color: white; background-color: red";
  // Template
  errorContainer.innerHTML = `
                          <strong>Error: ${error}</strong>
                        `;
  // Prepend to container
  postsContainer.prepend(errorContainer);
  setTimeout(() => errorContainer.remove(), 3000);
};

postsContainer.innerHTML = "Loading...";
fetch(api)
  .then((res) => res.json())
  .then((data) => data.forEach((post) => renderPost(post)))
  .catch((err) => {
    renderError(err);
  });
}


function postMessage(){
    //save msh to localstorage
}