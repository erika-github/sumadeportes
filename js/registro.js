document.addEventListener("DOMContentLoaded", function () {

  /**/


  // Función para mostrar el spinner
  function showSpinner() {
    document.getElementById('spinner').style.display = 'flex';
  }

  // Función para ocultar el spinner
  function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
  }


  /**/

  /*// Referencias al formulario, botón y campos
  const form = document.querySelector("form");
  const submitButton = form.querySelector("button[type='submit']");

  const tipoDocumentoEl = document.getElementById("tipoDocumento");
  const numeroDocumentoEl = document.getElementById("numeroDocumento");
  const nombreEl = document.getElementById("nombre");
  const apellidoEl = document.getElementById("apellido");
  const fechaNacimientoEl = document.getElementById("fechaNacimiento");
  const correo = document.getElementById("correo");

  // Referencias a los spans de error
  const errorNombre = document.getElementById("errorNombre");
  const errorApellido = document.getElementById("errorApellido");
  const errorDocumento = document.getElementById("errorDocumento");
  const errorFecha = document.getElementById("errorFecha");
  const errorCorreo = document.getElementById("errorCorreo");

  // Expresiones regulares para validaciones
  const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ' ]*$/; // Letras, acentos, ñ, espacios y apóstrofes
  const regexDocumento = /^[0-9]*$/;               // Solo dígitos
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular usada para el correo

  // Validaciones en tiempo real
  nombreEl.addEventListener("input", function () {
    if (nombreEl.value && !regexTexto.test(nombreEl.value)) {
      errorNombre.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
    } else {
      errorNombre.textContent = "";
    }
  });

  apellidoEl.addEventListener("input", function () {
    if (apellidoEl.value && !regexTexto.test(apellidoEl.value)) {
      errorApellido.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
    } else {
      errorApellido.textContent = "";
    }
  });

  numeroDocumentoEl.addEventListener("input", function () {

    const valueNumDoc = numeroDocumentoEl.value.trim();

    if (valueNumDoc.length < 7) {
      errorDocumento.textContent = "Debe contener un mínimo de 7 caracteres";
    }
    else if (numeroDocumentoEl.value && !regexDocumento.test(numeroDocumentoEl.value)) {
      errorDocumento.textContent = "Solo se permiten números.";
    } else {
      errorDocumento.textContent = "";
    }
  });

  // Validación en tiempo real para la fecha de nacimiento usando Flatpickr
  fechaNacimientoEl.addEventListener("input", function () {
    // Si el campo está vacío
    if (fechaNacimientoEl.value.trim() === "") {
      errorFecha.textContent = "La fecha de nacimiento no puede estar vacía.";
      return;
    }

    // Obtener la fecha seleccionada en Flatpickr
    const fechaNacimiento = fechaNacimientoEl._flatpickr.selectedDates[0];

    // Verificar si no se ha seleccionado ninguna fecha
    if (!fechaNacimiento) {
      errorFecha.textContent = "La fecha de nacimiento es obligatoria.";
      return;
    }

    // Obtener la fecha actual y establecerla sin horas
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    // Calcular la fecha mínima permitida (1 año atrás desde hoy)
    const fechaMinima = new Date(fechaActual);
    fechaMinima.setFullYear(fechaActual.getFullYear() - 1);

    console.log("Fecha de nacimiento seleccionada:", fechaNacimiento);
    console.log("Fecha mínima permitida:", fechaMinima);

    // Validar que la fecha de nacimiento sea menor o igual a la fecha mínima
    if (fechaNacimiento > fechaMinima) {
      errorFecha.textContent = "La fecha de nacimiento debe indicar una edad mayor a 1 año.";
      return;
    }

    // Si la validación pasa, limpiar el mensaje de error
    errorFecha.textContent = "";
  });

  correo.addEventListener("input", function () {

    if (correo.value.trim() === "") {
      errorCorreo.textContent = "El correo no puede estar vacío.";
    } else {
      errorCorreo.textContent = "";

    }
  });

  correo.addEventListener("input", function () {
    const value = correo.value.trim();
    if (value.length > 150) {
      errorCorreo.textContent = "El correo no puede tener más de 150 caracteres.";
    } else if (value && !regexEmail.test(value)) {
      errorCorreo.textContent = "Ingrese un correo electrónico válido.";
    } else {
      errorCorreo.textContent = "";
    }
  });*/

  // Referencias al formulario, botón y campos
const form = document.querySelector("form");
const submitButton = form.querySelector("button[type='submit']");

const tipoDocumentoEl = document.getElementById("tipoDocumento");
const numeroDocumentoEl = document.getElementById("numeroDocumento");
const nombreEl = document.getElementById("nombre");
const apellidoEl = document.getElementById("apellido");
const fechaNacimientoEl = document.getElementById("fechaNacimiento");
const correo = document.getElementById("correo");

// Referencias a los spans de error
const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorDocumento = document.getElementById("errorDocumento");
const errorFecha = document.getElementById("errorFecha");
const errorCorreo = document.getElementById("errorCorreo");

// Expresiones regulares para validaciones
const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ' ]*$/; // Letras, acentos, ñ, espacios y apóstrofes
const regexDocumento = /^[0-9]*$/;               // Solo dígitos
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   // Expresión regular para correo

// Función para validar campo vacío
function validarCampoVacio(input, errorSpan, nombreCampo) {
  if (input.value.trim() === "") {
    errorSpan.textContent = `El ${nombreCampo} es requerido.`;
    return false;
  }
  return true;
}

// Validaciones en tiempo real para el nombre
nombreEl.addEventListener("input", function () {
  if (!validarCampoVacio(nombreEl, errorNombre, "Nombre")) return;
  if (!regexTexto.test(nombreEl.value)) {
    errorNombre.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
  } else {
    errorNombre.textContent = "";
  }
});

// Validaciones en tiempo real para el apellido
apellidoEl.addEventListener("input", function () {
  if (!validarCampoVacio(apellidoEl, errorApellido, "Apellido")) return;
  if (!regexTexto.test(apellidoEl.value)) {
    errorApellido.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
  } else {
    errorApellido.textContent = "";
  }
});

// Validación en tiempo real para el número de documento
numeroDocumentoEl.addEventListener("input", function () {
  if (!validarCampoVacio(numeroDocumentoEl, errorDocumento, "Número de Documento")) return;
  
  const valueNumDoc = numeroDocumentoEl.value.trim();
  if (valueNumDoc.length < 7) {
    errorDocumento.textContent = "Debe contener un mínimo de 7 caracteres.";
  } else if (!regexDocumento.test(numeroDocumentoEl.value)) {
    errorDocumento.textContent = "Solo se permiten números.";
  } else {
    errorDocumento.textContent = "";
  }
});

// Validación en tiempo real para la fecha de nacimiento usando Flatpickr
fechaNacimientoEl.addEventListener("input", function () {
  if (!validarCampoVacio(fechaNacimientoEl, errorFecha, "Fecha de Nacimiento")) return;

  // Obtener la fecha seleccionada en Flatpickr
  const fechaNacimiento = fechaNacimientoEl._flatpickr.selectedDates[0];

  // Verificar si no se ha seleccionado ninguna fecha
  if (!fechaNacimiento) {
    errorFecha.textContent = "La fecha de nacimiento es obligatoria.";
    return;
  }

  // Obtener la fecha actual y establecerla sin horas
  const fechaActual = new Date();
  fechaActual.setHours(0, 0, 0, 0);

  // Calcular la fecha mínima permitida (1 año atrás desde hoy)
  const fechaMinima = new Date(fechaActual);
  fechaMinima.setFullYear(fechaActual.getFullYear() - 1);

  console.log("Fecha de nacimiento seleccionada:", fechaNacimiento);
  console.log("Fecha mínima permitida:", fechaMinima);

  // Validar que la fecha de nacimiento indique una edad mayor a 1 año
  if (fechaNacimiento > fechaMinima) {
    errorFecha.textContent = "La fecha de nacimiento debe indicar una edad mayor a 1 año.";
    return;
  }

  // Si la validación pasa, limpiar el mensaje de error
  errorFecha.textContent = "";
});

// Validación en tiempo real para el correo
correo.addEventListener("input", function () {
  if (!validarCampoVacio(correo, errorCorreo, "Correo")) return;

  const value = correo.value.trim();
  if (value.length > 150) {
    errorCorreo.textContent = "El correo no puede tener más de 150 caracteres.";
  } else if (!regexEmail.test(value)) {
    errorCorreo.textContent = "Ingrese un correo electrónico válido.";
  } else {
    errorCorreo.textContent = "";
  }
});

  // Evento submit unificado: primero se validan los campos y si todo es correcto se envía la solicitud
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    showSpinner();


    // Validaciones finales: se verifica que los campos no estén vacíos
    if (nombreEl.value.trim() === "") {
      errorNombre.textContent = "El nombre es requerido.";
    }
    if (apellidoEl.value.trim() === "") {
      errorApellido.textContent = "El apellido es requerido.";
    }
    if (fechaNacimientoEl.value.trim() === "") {
      errorFecha.textContent = "La fecha de nacimiento es requerida.";
    }
    if (numeroDocumentoEl.value.trim() === "") {
      errorDocumento.textContent = "El número de documento es requerido.";
    }
    if (correo.value.trim() === "") {
      errorCorreo.textContent = "El correo es requerido."
    }

    // Si hay algún error, se detiene el envío
    if (
      errorNombre.textContent ||
      errorApellido.textContent ||
      errorFecha.textContent ||
      errorDocumento.textContent ||
      errorCorreo.textContent
    ) {
      /*alert("Por favor, corrija los errores en el formulario antes de enviarlo.");*/

      Swal.fire({
        title: "Error",
        text: "Por favor, corrige los errores en el formulario.",
        icon: "error",
        confirmButtonText: "Entendido"
      });
      hideSpinner();
      return;

    }

    // Deshabilita el botón para evitar múltiples envíos
    submitButton.disabled = true;

    // Recopilar datos
    const tipoDocumento = tipoDocumentoEl.value;
    const numeroDocumento = numeroDocumentoEl.value;
    const nombre = nombreEl.value.trim();
    const apellido = apellidoEl.value.trim();
    const fechaNacimiento = fechaNacimientoEl.value;
    const email = correo.value;

    let data = {
      documentType: tipoDocumento,
      documentNumber: numeroDocumento,
      firstName: nombre,
      lastName: apellido,
      birthDate: fechaNacimiento,
      //email: `${nombre.toLowerCase()}${apellido.toLowerCase()}@gmail.com`,
      email: email,
      locked: false,
      enabled: true,
      firstTime: true,
      numberRetries: 0,
      role: "ROLE_USER"
    };

    try {

      // Realiza la solicitud al servidor  
      //const response = await fetch ("https://1c28-107-170-56-246.ngrok-free.app/user/create", {      
      const response = await fetch("http://localhost:8085/user/create", {
        //const response = await fetch("https://ec2-18-118-19-249.us-east-2.compute.amazonaws.com:443/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      /* if (!response.ok) {            
         throw new Error("Error en la respuesta del servidor.");
       }*/

      const responseData = await response.json();

      if (responseData.code === "201") {
        sessionStorage.setItem("userEmail", email);
        await Swal.fire({
          title: "Registro exitoso",
          text: "Se ha enviado una contraseña temporal a su correo electrónico.",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
        window.location.href = "iniciar_sesion.html";
      } else if (responseData.code === "409") {
        await Swal.fire({
          title: "Error",
          text: "El correo pertenece a otro usuario. Coloque uno válido",
          icon: "error",
          confirmButtonText: "Intentar nuevamente"
        });

      } else {
        throw new Error(responseData.message || "Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: error.message || "No se pudo conectar con el servidor.",
        icon: "error",
        confirmButtonText: "Intentar nuevamente"
      });
    } finally {
      hideSpinner();
      // Reactiva el botón después de procesar la solicitud
      submitButton.disabled = false;
    }
  });
});
