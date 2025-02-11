function memu_cal() {
    const menubar_cal = document.getElementById('menubar-cal');

    if (menubar_cal.style.display === 'none') {
        menubar_cal.style.display = 'block';
    } else {
        menubar_cal.style.display = 'none';
    }
}

function memu_game() {
    const menubar_game = document.getElementById('menubar-game');

    if (menubar_game.style.display === 'none') {
        menubar_game.style.display = 'block';
    } else {
        menubar_game.style.display = 'none';
    }
}