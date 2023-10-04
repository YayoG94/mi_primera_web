const btn = document.getElementById("btn")


function validarFormulario() {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  
  const alerta = document.getElementById("alerta")

   // Expresión regular para buscar números en el nombre
   var regex = /\d/;

  if (nombre === "" || email === "" || mensaje === "") {
    alerta.style.color = "red"
    alerta.innerHTML = "Por favor, complete todos los campos.";
    return false; // Evita que el formulario se envíe si hay campos vacíos.
  }else if (regex.test(nombre)) {
    alerta.textContent = "El nombre no debe contener números.";
    alerta.style.color = "red";
  }else if (nombre.length <= 4) { 
    alerta.style.color = "red"
    alerta.innerHTML = "Nombre invalido, debe de tener más de 4 caracteres";
    return false;
  }else{
    alerta.style.color = "green"
    alerta.innerHTML = "Mensaje Enviado";
    return true; // El formulario se enviará si todos los campos están llenos.
  }
}