$(document).ready(function () {
    let postButton = $("#postBtn");
    let postDiv = $("#postDiv");

    function getPost(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(resultPost => {
                console.log(resultPost);
                postDiv.append(`<h3>${resultPost.title}</h3>`);
                postDiv.append(`<p>${resultPost.body}</p>`);
            })
            .catch(err => console.log(err));
    }
    postButton.click(function () {
        getPost(2);
    });
});