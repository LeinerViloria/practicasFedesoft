/**
 * Tener un HTML con
 * -> Nombre
 * -> Edad
 * -> Direccion
 * -> Telefono
 * -> Documento
 * -> Btn (Ingresar datos)
 * -> Prompt para cada dato
 * -> Apareceran los datos en el html
 */

let btn = document.getElementById("btn");
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dir = document.getElementById("dir");
let tel = document.getElementById("tel");
let doc = document.getElementById("doc");

// variableU hace referencia al nombre de la variable con la U de usuario
const datos = () => {
  let nombreU = prompt("Ingrese su nombre");
  let edadU = prompt("Ingrese su edad");
  let dirU = prompt("Ingrese su dirección");
  let telU = prompt("Ingrese su telefono");
  let docU = prompt("Ingrese su documento");

  nombre.innerHTML = "Nombre: " + nombreU;
  edad.innerHTML = "Edad: " + edadU;
  dir.innerHTML = "Direccion: " + dirU;
  tel.innerHTML = "Telefono: " + telU;
  doc.innerHTML = "Documento: " + docU;

  localStorage.setItem("nombre", nombreU);
  localStorage.setItem("edad", edadU);
  localStorage.setItem("dir", dirU);
  localStorage.setItem("tel", telU);
  localStorage.setItem("doc", docU);

};

/**
 * Normalmente, el null no es un string, si hay otra forma de
 * hacer esa condicion, estoy pendiente
 */

if (
  localStorage.getItem("nombre") &&
  localStorage.getItem("nombre") != "null" &&
  localStorage.getItem("nombre") != "undefined"
) {
  nombre.innerHTML = "Nombre: " + localStorage.getItem("nombre");
}

if (
  localStorage.getItem("edad") &&
  localStorage.getItem("edad") != "null" &&
  localStorage.getItem("edad") != "undefined"
) {
  edad.innerHTML = "Edad: " + localStorage.getItem("edad");
}

if (
  localStorage.getItem("dir") &&
  localStorage.getItem("dir") != "null" &&
  localStorage.getItem("dir") != "undefined"
) {
  dir.innerHTML = "Direccion: " + localStorage.getItem("dir");
}

if (
  localStorage.getItem("tel") &&
  localStorage.getItem("tel") != "null" &&
  localStorage.getItem("tel") != "undefined"
) {
  tel.innerHTML = "Telefono: " + localStorage.getItem("tel");
}

if (
  localStorage.getItem("doc") &&
  localStorage.getItem("doc") != "null" &&
  localStorage.getItem("doc") != "undefined"
) {
  doc.innerHTML = "Documento: " + localStorage.getItem("doc");
}

btn.onclick = () => {
  datos();
};
