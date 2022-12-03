// Get DOM elements
const userContainer = document.getElementById("userInfo");
const postsContainer = document.getElementById("postArea2");
//const api = "https://jsonplaceholder.typicode.com/posts";
const api = "https://wild-cyan-goat-suit.cyclic.app/user/me";
let userPostapi = "https://wild-cyan-goat-suit.cyclic.app/post/postbyid"


const renderUser = ({ name, id }) => {
  userPostapi += `/${id}`;
  console.log(userPostapi);
  
  userContainer.innerHTML = `
                          <legend>Logged In User</legend>
                          <h5>${name}</h5>
                          <p id='userId'>${id}</p>`;
    // Prepend to container
  fetch(userPostapi)
    .then((res) => res.json())
    .then((data) => data.forEach((post) => {
      renderPost(post);
    }));
  };
  
const renderPost = ({ _id, id, text, date }) => {
  // Create div container
  const postContent = document.createElement("div");
  // Set id as attribute
  postContent.setAttribute("id", _id);
  postContent.setAttribute('class', 'row');
  // Template
  postContent.innerHTML = `
                        <p>${text}</p>
                        <small>Author: ${id}</small></br>
                        <small>Date Posted: ${date}</small></br>
                        <small>Message ID: ${_id}</small>
                      `;
  // Prepend to container
  postsContainer.prepend(postContent);
}
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
  postsContainer.appendChild(errorContainer);
  setTimeout(() => errorContainer.remove(), 3000);
};


//postsContainer.innerHTML = "Loading...";




fetch(api)
  .then((res) => res.json())
  .then((data) => renderUser(data))
  
fetch(userPostapi)
  .then((res) => res.json())
  .then((data) => data.forEach((post) => {
    if(post.id === currentUser.id){
      renderPost(post);
    }
  }));






  //######################################################################
  //Start: POSTING MSG
  //######################################################################
  // Get DOM elements
const form = document.getElementById("post-form");
const postsContainer2 = document.getElementById("postArea2");
const apipost = "https://wild-cyan-goat-suit.cyclic.app/post/send";

/* 
Render post - This function takes an object with an id, userID, title 
and body
*/

const renderPost2 = ({ text, id }) => {
  // Create div container
  const postContent2 = document.createElement("div");
  // Set id as attribute
  postContent2.setAttribute("id", id);
  // Template
  postContent2.innerHTML = "posted";

                      /*postContent2.innerHTML = `
                      <h5>${text}</h5>
                      <small>${id}</small>
                    `;*/                    
  // Prepend to container
  postsContainer2.prepend(postContent2);
};

/*
Render error - This function takes an error object and displays it. 
It also sets a timeout to remove it from the DOM  
*/

const renderError2 = (error) => {
  // Create div for error
  const errorContainer2 = document.createElement("div");
  // Setting styles via cssText property
  errorContainer2.style.cssText = "color: white; background-color: red";
  // Template
  errorContainer2.innerHTML = `
                          <strong>Error: ${error}</strong>
                        `;
  // Prepend to container
  postsContainer2.prepend(errorContainer2);
  setTimeout(() => errorContainer2.remove(), 3000);
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
        text: text,
        id: id
      }
    }
  } = event;
  console.log(text.value + " " + id.value);
  const optionsFetch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text:text.value, id:id.value })
  };
  // Use fetch API
  fetch(apipost, optionsFetch)
    //.then((res) => console.log(res))
    .then((res) => res.json())
    .then((data) => {
      renderPost2(data);
      event.target.reset();
    })
    .catch((err) => {
      renderError2(err);
      event.target.reset();
    });
};

form.addEventListener("submit", handleSubmit);

  //######################################################################
  //Start: POSTING MSG
  //######################################################################