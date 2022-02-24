let turno = 0;
const tablero = [null, null, null, null, null, null, null, null, null];

const buttons = document.getElementsByTagName("button");
function color(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            if (buttons[i].style.backgroundColor === 'pink' || buttons[i].style.backgroundColor === 'red') {
                alert('Este botón ya está marcado')
            } else {
                turno++
                buttons[i].style.backgroundColor = (turno % 2) === 0 ? 'pink' : 'red';
                tablero[id] = buttons[i].style.backgroundColor;
            } 
            console.log(hayGanador())
            if(hayGanador()) {
                alert('enhorabuena')
            }
        }
    }
}
color(buttons)

const hayGanador = function () {
    if (tablero[0] === tablero[1] && tablero[0] === tablero[2] && tablero[0]) {
        return true;
    }
    else if (tablero[3] === tablero[4] && tablero[3] === tablero[5] && tablero[3]) {
        return true;
    }
    else if (tablero[6] === tablero[7] && tablero[6] === tablero[8] && tablero[6]) {
        return true;
    }
    else if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0]) {
        return true;
    }
    else if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1]) {
        return true;
    }
    else if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2]) {
        return true;
    }
    else if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0]) {
        return true;
    }
    else if (tablero[2] === tablero[4] && tablero[2] === tablero[6] && tablero[2]) {
        return true;
    }
}
