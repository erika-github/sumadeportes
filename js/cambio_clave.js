
  document.addEventListener("DOMContentLoaded", function () {

    function updateUserEmail() {
      // Recuperar el correo electrónico desde sessionStorage
      const userEmail = sessionStorage.getItem("userEmail") || "";
  
      // Obtener el input del correo
      const emailInput = document.getElementById("correo");
  
      // Si el input existe, asignarle el valor
      if (emailInput) {
          emailInput.value = userEmail;
      }
  }
  
  updateUserEmail();

    // Función para actualizar el elemento de error:
    // Si message es vacío, se elimina el span de error (si existe).
    // Si message tiene contenido, se crea (si es necesario) y se actualiza.
    function updateErrorElement(errorId, targetContainer, message) {
     
        let errorEl = document.getElementById(errorId);
        if (message === "") {
          if (errorEl) {
            errorEl.remove();
          }
        } else {
          if (!errorEl) {
            errorEl = document.createElement("span");
            errorEl.id = errorId;
            errorEl.className = "error";
            targetContainer.parentNode.insertBefore(errorEl, targetContainer.nextSibling);
          }
          // Usar innerHTML para interpretar los <br>
          errorEl.innerHTML = message;
        }
    }
  
    // Toggle para mostrar/ocultar contraseñas
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const targetInputId = this.getAttribute('data-target');
        const input = document.getElementById(targetInputId);
    
        if(input.type === "password") {
          input.type = "text";
          this.classList.remove("fa-eye-slash");
          this.classList.add("fa-eye");
        } else {
          input.type = "password";
          this.classList.remove("fa-eye");
          this.classList.add("fa-eye-slash");
        }
      });
    });
  
    // Referencias al formulario y sus campos
    const form = document.getElementById("loginCambioClave");
    const correoEl = document.getElementById("correo");
    const claveTemporalEl = document.getElementById("claveTemporal");
    const claveNuevaEl = document.getElementById("claveNueva");
    const submitButton = document.getElementById("btnCrear");
  
    // Expresiones regulares para validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const claveNuevaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8}$/;
  
    // Validación en tiempo real para el correo electrónico
    correoEl.addEventListener("input", function () {
      // Aquí usamos el input mismo como contenedor de referencia
      const value = correoEl.value.trim();
      let mensaje = "";
      if (value.length > 150) {
        mensaje = "El correo no puede tener más de 150 caracteres.";
      } else if (value && !emailRegex.test(value)) {
        mensaje = "Ingrese un correo electrónico válido.";
      }
      updateErrorElement("errorCorreo", correoEl, mensaje);
    });
  
    // Validación en tiempo real para la contraseña temporal
    claveTemporalEl.addEventListener("input", function () {
      // Se usa el div .password-wrapper como contenedor de referencia
      const container = claveTemporalEl.parentNode;
      const value = claveTemporalEl.value;
      let mensaje = "";
      if (value.length > 150) {
        mensaje = "La contraseña temporal no puede tener más de 150 caracteres.";
      }
      updateErrorElement("errorClaveTemporal", container, mensaje);
    });
  
    // Validación en tiempo real para la contraseña nueva
    claveNuevaEl.addEventListener("input", function () {
      const container = claveNuevaEl.parentNode;
      const value = claveNuevaEl.value;
      let mensaje = "";
      if (value.length !== 8) {
        mensaje = "La nueva contraseña debe tener exactamente 8 caracteres.";
      } else if (!claveNuevaRegex.test(value)) {
        /*mensaje = "La contraseña debe contener mayúsculas, minúsculas, números y al menos un carácter especial.";*/
        mensaje="La contraseña debe contener mayúsculas, minúsculas, números<br>y al menos un carácter especial."
      }
      updateErrorElement("errorClaveNueva", container, mensaje);
    });
  
    // Evento submit: validación final y envío
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      let hayErrores = false;
      const correo = correoEl.value.trim();
      const claveTemporal = claveTemporalEl.value;
      const claveNueva = claveNuevaEl.value;
  
      // Validación para el correo electrónico
      let mensajeCorreo = "";
      if (correo === "") {
        mensajeCorreo = "El correo electrónico es requerido.";
        hayErrores = true;
      } else if (correo.length > 150) {
        mensajeCorreo = "El correo no puede tener más de 150 caracteres.";
        hayErrores = true;
      } else if (!emailRegex.test(correo)) {
        mensajeCorreo = "Ingrese un correo electrónico válido.";
        hayErrores = true;
      }
      updateErrorElement("errorCorreo", correoEl, mensajeCorreo);
  
      // Validación para la contraseña temporal
      let mensajeClaveTemporal = "";
      const containerTemporal = claveTemporalEl.parentNode;
      if (claveTemporal === "") {
        mensajeClaveTemporal = "La contraseña temporal es requerida.";
        hayErrores = true;
      } else if (claveTemporal.length > 150) {
        mensajeClaveTemporal = "La contraseña temporal no puede tener más de 150 caracteres.";
        hayErrores = true;
      }
      updateErrorElement("errorClaveTemporal", containerTemporal, mensajeClaveTemporal);
  
      // Validación para la contraseña nueva
      let mensajeClaveNueva = "";
      const containerNueva = claveNuevaEl.parentNode;
      if (claveNueva === "") {
        mensajeClaveNueva = "La nueva contraseña es requerida.";
        hayErrores = true;
      } else if (claveNueva.length !== 8) {
        mensajeClaveNueva = "La nueva contraseña debe tener exactamente 8 caracteres.";
        hayErrores = true;
      } else if (!claveNuevaRegex.test(claveNueva)) {
        /*mensajeClaveNueva = "La contraseña debe contener mayúsculas, minúsculas, números y al menos un carácter especial.";*/
        mensajeClaveNueva="La contraseña debe contener mayúsculas, minúsculas, números<br>y al menos un carácter especial."
        hayErrores = true;
      }
      updateErrorElement("errorClaveNueva", containerNueva, mensajeClaveNueva);
  
      // Si existen errores, se notifica y se detiene el envío
      if (hayErrores) {
        /*alert("Por favor, corrija los errores en el formulario antes de enviarlo.");*/
        Swal.fire({
          title: "Error",
          text: "Por favor, corrige los errores en el formulario.",
          icon: "error",
          confirmButtonText: "Entendido"
        });     
        return;
      }
  
      // Deshabilitar el botón para evitar envíos múltiples
      submitButton.disabled = true;
  
      // Preparar datos para enviar
      const data = {
        email: correo,
        oldPassword: claveTemporal,
        newPassword: claveNueva
      };
  
      try {
       
        //const response = await fetch("http://localhost:8085/change-password", {
        const response = await fetch( "https://ec2-18-118-19-249.us-east-2.compute.amazonaws.com:443/change-password", {
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
  
        if (responseData.code === "200") {
          await Swal.fire({
            title: "Cambio de contraseña exitoso",
            text: "Su contraseña ha sido actualizada.",
            icon: "success",
            confirmButtonText: "Aceptar"
          });
          window.location.href = "iniciar_sesion.html";
        } else if(responseData.code === "401"){
          await Swal.fire({
            title: "Error",
            text: "Contraseña temporal inválida. Favor verificar",
            icon: "error",
            confirmButtonText: "Intentar nuevamente"
          });
        
        } else {
          throw new Error(responseData.message);
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
        submitButton.disabled = false;
      }
    });
  });
  