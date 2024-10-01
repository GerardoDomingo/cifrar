document.getElementById('btn-cifrar').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;

    const cipher = new serpent.Serpent();
    const mensajeCifrado = cipher.encrypt(mensaje, clave);
    document.getElementById('mensaje-cifrado').innerText = mensajeCifrado;
});

document.getElementById('btn-descifrar').addEventListener('click', function() {
    const mensajeCifrado = document.getElementById('mensaje-cifrado-input').value;
    const clave = document.getElementById('clave-descifrar').value;

    const cipher = new serpent.Serpent();
    const mensajeDescifrado = cipher.decrypt(mensajeCifrado, clave);
    document.getElementById('mensaje-descifrado').innerText = mensajeDescifrado;
});

// Función para copiar el mensaje cifrado al portapapeles
document.getElementById('btn-copiar').addEventListener('click', function() {
    const mensajeCifrado = document.getElementById('mensaje-cifrado').innerText;
    navigator.clipboard.writeText(mensajeCifrado)
        .then(() => {
            alert('Mensaje cifrado copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el mensaje cifrado: ', err);
        });
});
