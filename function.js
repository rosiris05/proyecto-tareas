// Función para manejar clics
function handleClick() {
    alert('Botón clickeado!');
}

// Función para manejar eventos de teclado
function handleKeyUp() {
    const input = document.getElementById('myInput').value;
    console.log('Texto ingresado:', input);
}

// Función para manejar eventos de ratón
function handleMouseOver() {
    document.getElementById('hoverDiv').classList.add('hover');
}

function handleMouseOut() {
    document.getElementById('hoverDiv').classList.remove('hover');
}