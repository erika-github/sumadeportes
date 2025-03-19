

/*document.addEventListener("DOMContentLoaded", function () {

  
    /*function updateUserEmail() {
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
  /*const toggleIcons = document.querySelectorAll('.toggle-password');

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

  /*const form = document.getElementById("loginForm");
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
    /*var firstName;
    var lastName;
    var role;
    var birthDate;
    var documentType;
    var documentNumber;*/
    


    /*const requestData = {
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
        
        /*firstName = responseData.data.firstName;
        lastName = responseData.data.lastName;
        role = responseData.data.role;       
        birthDate = response.data.birthDate;
        documentType = response.data.documentType;
        documentNumber = response.data.documentNumber;*/

       /* console.log("Response completo:", response);
        console.log("Response data:", response?.data);
        console.log("BirthDate:", response?.data?.birthDate);
        console.log("FirstName:", response?.data?.firstName);
        console.log("LastName:", response?.data?.lastName);
        console.log("Email:", response?.data?.email);
        console.log("UserId:", response?.data?.userId);
        console.log("Document Type:", response?.data?.userId?.documentType);
        console.log("Document Number:", response?.data?.userId?.documentNumber);

        const birthDate = response.data.birthDate;
        const documentType = response.data.userId.documentType; 
        const documentNumber = response.data.userId.documentNumber;
        const firstName = response.data.firstName;
        const lastName = response.data.lastName;
        const role = response.data.role;
        const emailR = response.data.email;

         
        sessionStorage.setItem("userFirstName", firstName);
        sessionStorage.setItem("userLastName", lastName);     
        sessionStorage.setItem("userRole", role);  
        sesionStorage.setItem("userBirthdate", birthDate);
        sesionStorage.setItem("userTypeDoc",documentType);
        sesionStorage.setItem("userDoc", documentNumber);
        sesionStorage.setItem("userEmail",emailR)

        
        window.location.href = "gestion.html";
      } else if(responseData.code === "404"){
        Swal.fire({
          title: "Error",
         /* text: responseData.message || "Credenciales incorrectas",*/
      /*    text: "El correo es incorrecto. Favor verificar",
          icon: "error",
          confirmButtonText: "Intentar nuevamente"
        });
      }else if(responseData.code === "401"){
        Swal.fire({
          title: "Error",
         /* text: responseData.message || "Credenciales incorrectas",*/
      /*    text: "La contraseña es inválida. Favor verificar",
          icon: "error",
          confirmButtonText: "Intentar nuevamente"
        });

      }else{
        Swal.fire({
          title: "Error",
          //text: responseData.message || "Credenciales incorrectas",  
          text: responseData.message,       
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
});*/

document.addEventListener("DOMContentLoaded", function () {

  function updateUserEmail() {
      const userEmail = sessionStorage.getItem("userEmail") || "";
      const emailInput = document.getElementById("correo");
      if (emailInput) {
          emailInput.value = userEmail;
      }
  }

  updateUserEmail();

  const toggleIcons = document.querySelectorAll('.toggle-password');
  toggleIcons.forEach(icon => {
      icon.addEventListener('click', function () {
          const targetInputId = this.getAttribute('data-target');
          const input = document.getElementById(targetInputId);
          if (input) {
              input.type = input.type === "password" ? "text" : "password";
              this.classList.toggle("fa-eye");
              this.classList.toggle("fa-eye-slash");
          }
      });
  });

  const form = document.getElementById("loginForm");
  const btnLogin = document.getElementById("btnLogin");
  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorContrasena = document.getElementById("errorContrasena");

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  correo.addEventListener("input", function () {
      errorCorreo.textContent = correo.value.trim() === "" ? "El correo es requerido."
          : !regexEmail.test(correo.value) ? "Ingresa un correo válido." : "";
  });

  contrasena.addEventListener("input", function () {
      errorContrasena.textContent = contrasena.value.trim() === "" ? "La contraseña es requerida." : "";
  });

  form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (correo.value.trim() === "") {
          errorCorreo.textContent = "El correo es requerido.";
      }
      if (contrasena.value.trim() === "") {
          errorContrasena.textContent = "La contraseña es requerida.";
      }
      if (errorCorreo.textContent || errorContrasena.textContent) {
          Swal.fire("Error", "Por favor, corrige los errores antes de iniciar sesión.", "warning");
          return;
      }

      btnLogin.disabled = true;

      const requestData = { email: correo.value, password: contrasena.value };

      try {
          let response = await fetch("http://localhost:8085/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(requestData)
          });

          let responseData = await response.json();

          console.log("Response completo:", responseData);

          if (responseData.code === "403") {
              Swal.fire({
                  title: "Cambio de contraseña requerido",
                  text: "Esta es la primera vez que inicias sesión, por favor cambia tu contraseña",
                  icon: "warning",
                  confirmButtonText: "Aceptar"
              }).then(() => window.location.href = "cambio_clave.html");

          } else if (response.ok && responseData.data) {
              const { firstName, lastName, role, birthDate, email, userId } = responseData.data;
              const { documentType, documentNumber } = userId || {};

              console.log("BirthDate:", birthDate);
              console.log("FirstName:", firstName);
              console.log("LastName:", lastName);
              console.log("Email:", email);
              console.log("UserId:", userId);
              console.log("Document Type:", documentType);
              console.log("Document Number:", documentNumber);

              sessionStorage.setItem("userFirstName", firstName || "");
              sessionStorage.setItem("userLastName", lastName || "");
              sessionStorage.setItem("userRole", role || "");
              sessionStorage.setItem("userBirthdate", birthDate || "");
              sessionStorage.setItem("userTypeDoc", documentType || "");
              sessionStorage.setItem("userDoc", documentNumber || "");
              sessionStorage.setItem("userEmail", email || "");

              window.location.href = "gestion.html";

          } else if (responseData.code === "404") {
              Swal.fire("Error", "El correo es incorrecto. Favor verificar", "error");

          } else if (responseData.code === "401") {
              Swal.fire("Error", "La contraseña es inválida. Favor verificar", "error");

          } else {
              Swal.fire("Error", responseData.message || "Credenciales incorrectas", "error");
          }

      } catch (error) {
          console.error("Error:", error);
          Swal.fire("Error", "No se pudo conectar con el servidor.", "error");
      } finally {
          btnLogin.disabled = false;
      }
  });
});


