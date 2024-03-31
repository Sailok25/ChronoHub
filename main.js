function actualizarHoraPais(zonaHoraria, elementoHora) {
    const options = { timeZone: zonaHoraria, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const horaPais = new Date().toLocaleString('es-ES', options);
    elementoHora.textContent = `Hora: ${horaPais}`;
}

// Actualizar cada segundo para cada país
setInterval(function() {
    actualizarHoraPais('America/Mexico_City', document.getElementById('hora-mexico'));
    actualizarHoraPais('America/Lima', document.getElementById('hora-peru'));
    actualizarHoraPais('America/Guayaquil', document.getElementById('hora-ecuador'));
    actualizarHoraPais('Europe/Madrid', document.getElementById('hora-espana'));
    actualizarHoraPais('Chile/Continental', document.getElementById('hora-chile'));
    actualizarHoraPais('America/La_Paz', document.getElementById('hora-bolivia'));
    actualizarHoraPais('America/Argentina/Buenos_Aires', document.getElementById('hora-argentina'));
    actualizarHoraPais('America/Bogota', document.getElementById('hora-colombia'));
    actualizarHoraPais('America/New_York', document.getElementById('hora-estados-unidos'));
    actualizarHoraPais('America/Santo_Domingo', document.getElementById('hora-republica-dominicana'));
    actualizarHoraPais('America/Caracas', document.getElementById('hora-venezuela'));
}, 1000);

// Actualizar al cargar la página
window.onload = function() {
    // Actualiza la hora de cada país al cargar la página
    actualizarHoraPais('America/Mexico_City', document.getElementById('hora-mexico'));
    actualizarHoraPais('America/Lima', document.getElementById('hora-peru'));
    actualizarHoraPais('America/Guayaquil', document.getElementById('hora-ecuador'));
    actualizarHoraPais('Europe/Madrid', document.getElementById('hora-espana'));
    actualizarHoraPais('Chile/Continental', document.getElementById('hora-chile'));
    actualizarHoraPais('America/La_Paz', document.getElementById('hora-bolivia'));
    actualizarHoraPais('America/Argentina/Buenos_Aires', document.getElementById('hora-argentina'));
    actualizarHoraPais('America/Bogota', document.getElementById('hora-colombia'));
    actualizarHoraPais('America/New_York', document.getElementById('hora-estados-unidos'));
    actualizarHoraPais('America/Santo_Domingo', document.getElementById('hora-republica-dominicana'));
    actualizarHoraPais('America/Caracas', document.getElementById('hora-venezuela'));
};