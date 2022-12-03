// Get DOM elements
const form = document.getElementById("post-form");
const postsContainer = document.getElementById("posts");
const apipost = "https://wild-cyan-goat-suit.cyclic.app/post/send";

/* 
Render post - This function takes an object with an id, userID, title 
and body
*/

const renderPost = ({ text, id }) => {
  // Create div container
  const postContent = document.createElement("div");
  // Set id as attribute
  postContent.setAttribute("id", id);
  // Template
  postContent.innerHTML = `
                        <h5>${text}</h5>
                        <small>Author: ${id}</small>
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

/* 
Sumbit handler - This function will be called on form submission and 
uses the fetch API to send a POST request and handles succesful or error 
scenarios
*/
const handleSubmit = (event) => {
  // Prevent default submission of form
  event.preventDefault();
  // Pull out the value of inputs in the form
  const {
    target: {
      elements: {
        text: { value: text },
        id: { value: id }
      }
    }
  } = event;
  const optionsFetch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text, id})
  };
  // Use fetch API
  fetch(apipost, optionsFetch)
    .then((res) => res.json())
    .then((data) => {
      renderPost(data);
      event.target.reset();
    })
    .catch((err) => {
      renderError(err);
      event.target.reset();
    });
};

form.addEventListener("submit", handleSubmit);