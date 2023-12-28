$(document).ready(function () {
    let button = $("#btn");
    button.click(function () {
        let name = $("#name").val();
        if (typeof name !== 'string' || name.trim() === "" || !isNaN(name)) {
            alert('Please enter a valid name');
            return;
        }
        let h1 = $("<h1>").text("Hello there " + name + "!");
        $("#main").append(h1);
        $("#name").val("");
    });
});