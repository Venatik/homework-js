$(document).ready(function () {
    let button = $("#btn");

    button.click(function () {
        $.ajax({
            url: "https://swapi.dev/api/people/1",
            success: function (luke) {
                console.log("Hello is this thing on?");
                console.log(luke);

                $("#lukeList").append(`<li>Name: ${luke.name}</li>`)
                $("#lukeList").append(`<li>Height: ${luke.height}cm</li>`)
                $("#lukeList").append(`<li>Mass: ${luke.mass}kg</li>`)
            },
            error: function () {
                console.log("An error has occured, please try again later.")
            }
        })
    })
});