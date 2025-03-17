

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

  /**/
  const toggleIcons = document.querySelectorAll('.toggle-password');

  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      // Obtenemos el id del input asociado desde el atributo data-target
      const targetInputId = this.getAttribute('data-target');
      const input = document.getElementById(targetInputId);

      // Verificamos si el input está en modo password o text
      if (input.type === "password") {
        input.type = "text";
        // Cambiamos el ícono a "ojito abierto"
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      } else {
        input.type = "password";
        // Cambiamos el ícono a "ojito cerrado"
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      }
    });
  });


  /**/


  /** */

  const form = document.getElementById("loginForm");
  const btnLogin = document.getElementById("btnLogin");
  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorContrasena = document.getElementById("errorContrasena");

  // Expresión regular para validar el correo electrónico.
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación en tiempo real para el campo correo.
  correo.addEventListener("input", function () {
    if (correo.value.trim() === "") {
      errorCorreo.textContent = "El correo es requerido.";
    } else if (!regexEmail.test(correo.value)) {
      errorCorreo.textContent = "Ingresa un correo válido.";
    } else {
      errorCorreo.textContent = "";
    }
  });

  // Validación en tiempo real para el campo contraseña.
  contrasena.addEventListener("input", function () {
    if (contrasena.value.trim() === "") {
      errorContrasena.textContent = "La contraseña es requerida.";
    } else {
      errorContrasena.textContent = "";
    }
  });

  // Evento submit del formulario.
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Validación final antes de enviar.
    if (correo.value.trim() === "") {
      errorCorreo.textContent = "El correo es requerido.";
    }
    if (contrasena.value.trim() === "") {
      errorContrasena.textContent = "La contraseña es requerida.";
    }
    if (errorCorreo.textContent || errorContrasena.textContent) {
      alert("Por favor, corrige los errores antes de iniciar sesión.");
      return;
    }

    // Deshabilitar el botón para evitar múltiples envíos.
    btnLogin.disabled = true;

    const email = correo.value;
    const password = contrasena.value;
    var firstName;
    var lastName;
    var role;


    const requestData = {
      email: email,
      password: password
    };

    try {
      let response = await fetch("http://localhost:8085/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
      });

      let responseData = await response.json();

      if (responseData.code === "403") {
        Swal.fire({
          title: "Cambio de contraseña requerido",
          text: "Esta es la primera vez que inicias sesión, por favor cambia tu contraseña",
          icon: "warning",
          confirmButtonText: "Aceptar"
        }).then(() => {
          window.location.href = "cambio_clave.html";
        });
      } else if (response.ok) {
        
        firstName = responseData.data.firstName;
        lastName = responseData.data.lastName;
        role = responseData.data.role;                
        sessionStorage.setItem("userFirstName", firstName);
        sessionStorage.setItem("userLastName", lastName);     
        sessionStorage.setItem("userRole", role);      
        
        window.location.href = "gestion.html";
      } else {
        Swal.fire({
          title: "Error",
          text: responseData.message || "Credenciales incorrectas",
          icon: "error",
          confirmButtonText: "Intentar nuevamente"
        });
      }

    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo conectar con el servidor.",
        icon: "error",
        confirmButtonText: "Intentar nuevamente"
      });
    } finally {
      btnLogin.disabled = false;
    }
  });
});

