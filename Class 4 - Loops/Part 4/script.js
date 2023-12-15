for (let i = 0; i <= 20; i++) {
    let paragraph = document.getElementById("counter");
    if (i % 2 == 0) {
        paragraph.innerHTML += `<p">${i}</p><br>`;
    }
    else {
        paragraph.innerHTML += `<p>${i}</p>&nbsp`;
    }
}

// Ovaa vezba e tolku nekoherentno napisana (Homework #4) sto ne uspeav da sfatam sto se bara tocno. :D
// Posle feedback ce probam da ja popravam.