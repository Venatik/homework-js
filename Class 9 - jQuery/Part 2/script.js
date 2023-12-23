$(document).ready(function () {
    let button = $("#btn");
    button.click(function () {
        let text = $("#text").val();
        let color = $("#color").val().toLowerCase();

        if (color === "red" || color === "blue" || color === "green" || color === "yellow" || color === "purple") {
            $("#container").append(`<h1 style="color: ${color}">${text}</h1>`);
        } else {
            $("#container").append(`<h3 style="color: red">Please enter a valid color. Valid colors are red, blue, green, yellow and purple.</h3>`);
        }

        $("#text").val("");
        $("#color").val("");
    });
});