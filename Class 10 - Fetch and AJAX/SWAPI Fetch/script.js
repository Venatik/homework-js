$(document).ready(function () {
    let button = $("#btn");

    button.click(function () {
        fetch("https://swapi.dev/api/people/1")
            .then(function (response) {
                return response.json();
            })
            .then(function (parsedData) {
                console.log(parsedData);
                useData(parsedData);
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    function useData(lukeData) {
        $("#lukeList").append(`<li>Name: ${lukeData.name}</li>`)
        $("#lukeList").append(`<li>Height: ${lukeData.height}cm</li>`)
        $("#lukeList").append(`<li>Mass: ${lukeData.mass}kg</li>`)
    }
});