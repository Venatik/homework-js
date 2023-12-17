window.onload = function() {
    let row = prompt("Enter number of rows:");
    let col = prompt("Enter number of columns:");
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let i = 0; i < row; i++) {
        let tableRow = document.createElement("tr");
        
        for (let j = 0; j < col; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(`Row-${i + 1} Column-${j + 1}`);
            cell.appendChild(cellText);
            tableRow.appendChild(cell);

            cell.style.border = "2px solid black";
            cell.style.padding = "5px";
        }
        
        tableBody.appendChild(tableRow);
    }

    table.appendChild(tableBody);

    let container = document.getElementById("container");
    container.appendChild(table);
}