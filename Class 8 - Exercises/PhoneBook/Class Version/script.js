let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let saveButton = document.getElementById("saveButton");
let table = document.getElementById("contactsTable");

let contacts = [];

function PhoneBookEntry(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

saveButton.addEventListener("click", function () {
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let phoneNumber = phoneNumberInput.value.trim();

    if (!firstName || !lastName || !phoneNumber) {
        alert("Please don't leave any empty imputs");
        return;
    }

    let newContact = new PhoneBookEntry(firstName, lastName, phoneNumber);
    contacts.push(newContact);
    // console.log(contacts);
    renderContacts(table, contacts);

    firstNameInput.value = "";
    lastNameInput.value = "";
    phoneNumberInput.value = "";
})


function renderContacts(table, contactArr) {
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
        </tr>
    `

    let index = 0;
    for (let contact of contactArr) {
        let row = table.insertRow(-1);
        row.insertCell(0).innerText = contact.firstName;
        row.insertCell(1).innerText = contact.lastName;
        row.insertCell(2).innerText = contact.phoneNumber;

        let actionCell = row.insertCell(3);
        actionCell.innerHTML = `<button onClick="deleteContact(${index})">Delete</button>`;

        index++;
    }
}

// function deleteContact(index) {
//     contacts.splice(index, 1);
//     renderContacts(table, contacts);
// }

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts(table, contacts);
}