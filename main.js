document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos todos los botones de "Comprar"
  var botonesComprar = document.querySelectorAll('.btn-comprar');

  // Agregamos el evento click a cada botón
  botonesComprar.forEach(function (boton) {
      boton.addEventListener('click', function () {
          // Mostramos el modal correspondiente
          var modal = new bootstrap.Modal(document.getElementById('modalCompra'));
          modal.show();
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var modal = new bootstrap.Modal(document.getElementById('modalDatosAlumno'));
});