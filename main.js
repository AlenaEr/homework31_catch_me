function getRandomColor() {
    const color_1 = Math.floor(Math.random() * 256);
    const color_2 = Math.floor(Math.random() * 256);
    const color_3 = Math.floor(Math.random() * 256);
    return `rgb(${color_1}, ${color_2}, ${color_3})`
}

function moveSquare() {
    const square = document.getElementById('colorfulSquare');
    const maxWidth = window.innerWidth - square.clientWidth;
    const maxHeight = window.innerHeight - square.clientHeight;

    const left = Math.floor(Math.random() * maxWidth);
    const top = Math.floor(Math.random() * maxHeight);

    square.style.left = `${left}px`
    square.style.top = `${top}px`
}

function changeColor() {
    const square = document.getElementById('colorfulSquare');
    const newColor = getRandomColor();
    square.style.backgroundColor = newColor;
}

setInterval(changeColor, 500);
setInterval(moveSquare, 600);
