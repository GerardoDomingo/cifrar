const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura el motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Usaremos EJS como motor de plantillas

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'codigo1.html'));
});
// Servir condigo.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Servir condigo.html
app.get('/descEscitala', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'descEscitala.html'));
});
// Servir condigo.html
app.get('/Justificacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/Justificacion.html'));
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
