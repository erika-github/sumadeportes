

document.addEventListener("DOMContentLoaded", function () {
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
    const errorCorreo= document.getElementById("errorCorreo");
  
    // Expresiones regulares para validaciones
    const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ' ]*$/; // Letras, acentos, ñ, espacios y apóstrofes
    const regexDocumento = /^[0-9]*$/;               // Solo dígitos
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular usada para el correo
  
    // Validaciones en tiempo real
    nombreEl.addEventListener("input", function() {
      if (nombreEl.value && !regexTexto.test(nombreEl.value)) {
        errorNombre.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
      } else {
        errorNombre.textContent = "";
      }
    });
  
    apellidoEl.addEventListener("input", function() {
      if (apellidoEl.value && !regexTexto.test(apellidoEl.value)) {
        errorApellido.textContent = "Solo se permiten letras, acentos, espacios y apóstrofes.";
      } else {
        errorApellido.textContent = "";
      }
    });
  
    numeroDocumentoEl.addEventListener("input", function() {

      const valueNumDoc = numeroDocumentoEl.value.trim();
      console.log("valor del numDoc=" +valueNumDoc)
      if(valueNumDoc.length < 7){
        errorDocumento.textContent = "Debe contener un mínimo de 7 caracteres";
      }
      else if (numeroDocumentoEl.value && !regexDocumento.test(numeroDocumentoEl.value)) {
        errorDocumento.textContent = "Solo se permiten números.";
      } else {
        errorDocumento.textContent = "";
      }
    });
  
    fechaNacimientoEl.addEventListener("input", function() {
      if (fechaNacimientoEl.value.trim() === "") {
        errorFecha.textContent = "La fecha de nacimiento no puede estar vacía.";
      } else {
        errorFecha.textContent = "";
      }
    });

    correo.addEventListener("input", function(){

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
    });
  
    // Evento submit unificado: primero se validan los campos y si todo es correcto se envía la solicitud
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
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
      if(correo.value.trim() === ""){
        errorCorreo.textContent = "El correo es requerido."
      }
  
      // Si hay algún error, se detiene el envío
      if (
        errorNombre.textContent ||
        errorApellido.textContent ||
        errorFecha.textContent ||
        errorDocumento.textContent||
        errorCorreo.textContent
      ) {
        /*alert("Por favor, corrija los errores en el formulario antes de enviarlo.");*/
       
        Swal.fire({
          title: "Error",
          text: "Por favor, corrige los errores en el formulario.",
          icon: "error",
          confirmButtonText: "Entendido"
        });
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
        const response = await fetch("http://localhost:8085/user/create", {
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
        } else if(responseData.code === "409"){
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
        // Reactiva el botón después de procesar la solicitud
        submitButton.disabled = false;
      }
    });
  });
