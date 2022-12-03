// Get DOM elements
const userContainer = document.getElementById("userInfo");
const postsContainer = document.getElementById("postArea");
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


  async function getId() {
    return console.log(document.getElementById('userId').innerHTML);
  }
  let id = getId();
  console.log(id);