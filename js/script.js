// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const contraseña1 = document.getElementById("contraseña1");
const contraseña2 = document.getElementById("contraseña2");
const contraseña2ErrorMessage = document.querySelector("#contraseña2 + .invalid-feedback");

contraseña1.addEventListener("input", () => {
  if (contraseña1.value !== contraseña2.value) {
    contraseña2.setCustomValidity("Las contraseñas no coinciden.");
    contraseña2ErrorMessage.style.display = "block";
  } else {
    contraseña2.setCustomValidity("");
    contraseña2ErrorMessage.style.display = "none";
  }
});

contraseña2.addEventListener("input", () => {
  if (contraseña1.value !== contraseña2.value) {
    contraseña2.setCustomValidity("Las contraseñas no coinciden.");
    contraseña2ErrorMessage.style.display = "block";
  } else {
    contraseña2.setCustomValidity("");
    contraseña2ErrorMessage.style.display = "none";
  }
});

function mostrarMensaje() {
  alert("El producto a sido añadido correctamente");
}



