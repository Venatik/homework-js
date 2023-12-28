$(document).ready(function () {
    let button = $("#btn");
    button.click(function () {
        let text = $("#text").val();
        let color = $("#color").val().toLowerCase();

        if (colorValidation(color)) {
            $("#container").append(`<h1 style="color: ${color}">${text}</h1>`);
        } else {
            $("#container").append(`<h3 style="color: red">Please enter a valid color. Valid colors are red, blue, green, yellow and purple.</h3>`);
        }

        $("#text").val("");
        $("#color").val("");
    });

    function colorValidation(color) {
        let validColors = ["red", "blue", "green", "yellow", "purple"]
        for (const validColor of validColors) {
            if (validColor === color) {
                return true;
            }
        }
        return false;
    }
});