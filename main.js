
/*
function getMessage() {
    // Get DOM elements
    const postsContainer = document.getElementById("posts");
    const api = "https://jsonplaceholder.typicode.com/posts"; //oktay's API



    const renderPost = ({ id, text }) => {
        // Create div container
        const postContent = document.createElement("div");
        // Set id as attribute
        postContent.setAttribute("id", id);
        // Template
        postContent.innerHTML = `
                        <h5>${text}</h5> `;
        // Prepend to container
        postsContainer.prepend(postContent);
    };

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
*/

console.log("hallo");
postMessage();


function getMessageFromLocalStorage(){

}

function postMessage() {

//newmsg_id =     
//newmsg_text = prompt("Please enter your msg", "");

msg = [{"id": "SbBGk", "text": "...."},{ "id": "SbBGfez","text": "...."}];
console.log(msg);
localStorage.setItem('msgID', JSON.stringify(msg));
}