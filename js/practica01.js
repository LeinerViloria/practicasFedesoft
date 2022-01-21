/**
 * 1-> A través de un boton, pedir el nombre
 * 2-> Despues del prompt del nombre, aparecen más prompt
 *      --> Edad, direccion, documento y telefono
 * 3-> En un alert, mostrar: 
 *      --> Hola --nombre--, tu edad es --edad--, tu direccion es --dir--, tu numero telefonico es --tel-- y tu documento es --doc--
 */

const limpiar = (cadena) => {
    return cadena.trim();
}

const datos = () => {
    let nombre, edad, dir, doc, tel;

    //Para evitar que se ingrese un prompt vacio

    do {
        nombre = prompt("Ingresa tu nombre");
        nombre = limpiar(nombre);
    } while (nombre=="");

    do {
        edad = prompt("Ingresa tu edad");
        edad = limpiar(edad);
    } while (edad=="");

    do {
        dir = prompt("Ingresa tu direccion");
        dir = limpiar(dir);
    } while (dir=="");

    do {
        doc = prompt("Ingresa tu documento");
        doc = limpiar(doc);
    } while (doc=="");

    do {
        tel = prompt("Ingresa tu telefono");
        tel = limpiar(tel);
    } while (tel=="");

    //Se muestra la informacion recogida
    alert("Hola "+nombre+
        "\nTu edad es "+edad+
        "\nTu dirección es "+dir+
        "\nTu documento es "+ doc+
        "\nTu telefono es "+tel);

}