$(document).ready(function () {
    let button = $("#btn");
    button.click(function () {
        let name = $("#name").val();
        let h1 = $("<h1>").text("Hello there " + name + "!");
        $("#main").append(h1);
    });
});