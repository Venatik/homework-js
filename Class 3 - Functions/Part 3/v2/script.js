let btn = document.getElementById('button');
let withdrawAmount = document.getElementById('amount');
let result_balance = document.getElementById('result_balance');

function atmWithdraw() {
    let balance = 1000;
    let amount = Number(withdrawAmount.value);
    if (amount > balance) {
        result_balance.innerHTML = (`Your current balance is: ${balance}. You cannot withdraw ${amount}.`);
    }
    else if (amount <= balance) {
        balance -= amount;
        result_balance.innerHTML = (`You have withdrawn ${amount} and your new balance is ${balance}.`);
    }
}

btn.addEventListener('click', atmWithdraw);