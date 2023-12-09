function atmWithdraw() {
    let balance = 1000; // Ako ja koristime funkcijata povise pati, ovaa varijabla bi bila nadvor od funkcijata
    let amount = Number(prompt("How much would you like to withdraw?"));
    if (amount > balance) {
        console.log("Insufficient funds!");
    }
    else if (amount <= balance) {
        balance -= amount;
        console.log(`You have withdrawn ${amount} and your new balance is ${balance}.`);
    }
}

atmWithdraw();