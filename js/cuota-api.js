// Obtener la URL actual
var urlLocal = window.location.href;

// Parsear la URL para obtener el objeto URLSearchParams
var urlParams = new URLSearchParams(window.location.search);

// Capturar el valor de la consulta 'miConsulta'
var id = urlParams.get('id');

// Imprimir el valor en la consola
console.log('Valor de la consulta "miConsulta":', id);
// URL del endpoint de tu servidor
var url = 'http://localhost:3002/api/user/getById?idUser=' + id; // Reemplaza con la URL correcta

// Realizar solicitud GET utilizando Fetch
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        // Manipula los datos recibidos y renderiza la información en la página
        console.log(data)
        // renderizarInformacionPagos(data);
        renderizarVistasMensuales(data)
    })
    .catch(error => {
        console.error('Error de fetch:', error);
    });

// Función para renderizar la información de pagos
// function renderizarInformacionPagos(data) {
//     var informacionPagosDiv = document.getElementById('informacion-pagos');

//     // Aquí puedes manipular los datos y renderizar la información en el DOM
//     // Por ejemplo, podrías crear elementos HTML como <p>, <ul>, etc., y agregarlos a informacionPagosDiv.
// }

function renderizarVistasMensuales(usuario) {
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    meses.forEach(function (mes) {
        var vistaMes = document.getElementById(mes);

        // Filtra los pagos correspondientes al mes actual
        var pagosMes = usuario.payments.filter(function (pago) {
            console.log("checkeando pago de" + pago.paymentDateTime)
            var mesDePago = parseInt(pago.paymentDateTime.split('/')[1], 10);
            console.log(mesDePago)
            return usuario.activity === pago.activity && mesDePago - 1 === meses.indexOf(mes);
        });

        // Renderiza la información en la vista del mes
        pagosMes.forEach(function (pago) {
            var divPago = document.createElement("div");
            divPago.textContent = "Pago: " + pago.paymentDateTime;

            // Marca como completado si el pago tiene status "Completed"
            if (pago.status === "Completed") {
                divPago.classList.add("pago-completado");
            }

            vistaMes.appendChild(divPago);
        });
    });
}