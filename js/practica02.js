/**
 * El usuario puede ingresar 5 departamentos de Colombia
 * Aparecerá un prompt("Por favor, ingrese uno de estos 5 dptos")
 * Validar los departamentos y dependiendo de cada uno, se mostrará un alert direfente
 * Se mostrarán 5 ciudades o pueblos de esos 5 departamentos
 */

/**
 * Las siguientes 5 funciones tienen la respectiva informacion de 5 ciudades
 * de los departamentos elegidos
 */

const sucre = () => {
    let ciudades = [
            ["Sincelejo", "Es una ciudad del norte de Colombia conocida por su festival de corridas de toros Corralejas y su patrimonio musical."],
            ["Corozal", "Forma parte de la región Caribe de Colombia y de la subregión geográfica Sabanas."],
            ["Sampues", "Es un municipio colombiano del occidente del departamento de Sucre, ubicado en la subregión de La Sabana."],
            ["Coveñas", "Es conocida por sus largas playas con aguas tranquilas y poco profundas."],
            ["Sucre", "Es un municipio colombiano del departamento homónimo ubicado en la subregión de La Mojana."]
        ];

    return ciudades;
}

const antioquia = () => {
    let ciudades = [
            ["Abejorral", "Es una población y municipio de Colombia, localizado en la subregión Oriente del departamento de Antioquia"],
            ["Amagá", "Es un municipio de la República de Colombia, situado en la subregión Suroeste del departamento de Antioquia."],
            ["Argelia", "Oficialmente Argelia de María, es un municipio de Colombia, localizado en la subregión Oriente del departamento de Antioquia."],
            ["Caldas", "Es un municipio de Colombia, que está ubicado en el Valle de Aburrá del departamento de Antioquia."],
            ["Caucasia", "Es un municipio colombiano localizado en la subregión del Bajo Cauca del departamento de Antioquia."]
        ];

    return ciudades;
}

const boyaca = () => {
    let ciudades = [
            ["Sogamoso", "La Provincia de Sugamuxi es una de las 15 provincias del departamento de Boyacá, Colombia."],
            ["Tópaga", "Es un municipio colombiano ubicado en la provincia de Sugamuxi en el departamento de Boyacá."],
            ["Turmequé", "Es un municipio colombiano ubicado en la provincia de Márquez en el departamento de Boyacá."],
            ["Susacón", "Es un municipio colombiano ubicado en la Provincia del Norte del departamento de Boyacá. "],
            ["Umbita", "Es un municipio colombiano ubicado en la Provincia de Márquez en el departamento de Boyacá."]
        ];

    return ciudades;
}

const magdalena = () => {
    let ciudades = [
            ["El retén", "Es un municipio del departamento del Magdalena, al norte de Colombia."],
            ["Plato", "Es un municipio ubicado en el departamento del Magdalena en la rivera oriental del río Magdalena."],
            ["Aracataca", "Es un municipio colombiano del departamento del Magdalena."],
            ["Santa Marta", "Es una ciudad ubicada en el mar Caribe, en el departamento de Magdalena en el norte de Colombia."],
            ["Ariguaní", "Es un municipio colombiano ubicado en el centro del Departamento del Magdalena."]
        ];

    return ciudades;
}

const meta = () => {
    let ciudades = [
            ["Cumaral", "Es un municipio colombiano situado en el piedemonte llanero del departamento del Meta caracterizado por su carne a la llanera y sus eventos de vaquería, coleo de toros."],
            ["La macarena", "La Macarena es una pequeña y aislada ciudad en las llanuras del centro de Colombia, al sur de Bogotá."],
            ["Villavicencio", "Es una ciudad del centro de Colombia, donde los Andes se juntan con la planicie de Los Llanos, al sureste de Bogotá."],
            ["Mesetas", "Es un municipio colombiano situado en el departamento del Meta."],
            ["Granada", "Es un municipio ubicado en el Meta, Colombia. El área municipal es de 350 km ² y el número de habitantes de 98.500."]
        ];

    return ciudades;
}

/**
 * Esta funcion me busca las ciudades, segun el departamento
 * elegido y me arma el mensaje que se mostrará
 */

const getMessageByDepartment = (departamento, ciudades) => {
    let mensaje  = "Elija una de las siguientes ciudades de "+departamento+":";

    for (let i = 0; i < ciudades.length; i++) {
        mensaje += "\n"+(i+1)+". "+ciudades[i][0];
    }

    return mensaje;
}

/**
 * Esta funcion busca la informacion de la ciudad elegida
 * por el usuario y arma el respectivo mensaje
 */

const caracteristicaCiudad = (opcion, ciudades) => {
    let mensaje = "La ciudad es: ";
    /**
     * Si la opcion viene de 1 a 5, se resta uno para la correcta
     * busqueda en el array de 0 a 4
     */
    opcion--;

    for (let i = 0; i < ciudades.length; i++) {
        if(opcion == i){
            mensaje += ciudades[i][0]+".\n"+ciudades[i][1];
            break;
        }
    }

    return mensaje;
}

//PRIMER MENSAJE EN PROMPT
let dptoIngresado = prompt("Elija uno de los siguientes departamentos:\n"+
                            "1. Antioquia\n"+
                            "2. Boyacá\n"+
                            "3. Magdalena\n"+
                            "4. Meta\n"+
                            "5. Sucre");

let mensaje; //Mesaje que se mostrará al seleccionar un departamento
let mensajeFinal; //Mensaje que se mostrará al seleccionar una ciudad
let ciudadIngresada;

switch (dptoIngresado) {
    case "1":
        mensaje = getMessageByDepartment("Antioquia", antioquia());
        ciudadIngresada = prompt(mensaje);
        if(ciudadIngresada>=1 && ciudadIngresada<=5){
            mensajeFinal = caracteristicaCiudad(ciudadIngresada, antioquia());
            alert(mensajeFinal);
        }else{
            alert("La ciudad ingresada no es válida");
        }
        break;

    case "2":
        mensaje = getMessageByDepartment("Boyacá", boyaca());
        ciudadIngresada = prompt(mensaje);
        if(ciudadIngresada>=1 && ciudadIngresada<=5){
            mensajeFinal = caracteristicaCiudad(ciudadIngresada, boyaca());
            alert(mensajeFinal);
        }else{
            alert("La ciudad ingresada no es válida");
        }
        break;

    case "3":
        mensaje = getMessageByDepartment("Magdalena", magdalena());
        ciudadIngresada = prompt(mensaje);
        if(ciudadIngresada>=1 && ciudadIngresada<=5){
            mensajeFinal = caracteristicaCiudad(ciudadIngresada, magdalena());
            alert(mensajeFinal);
        }else{
            alert("La ciudad ingresada no es válida");
        }
        break;

    case "4":
        mensaje = getMessageByDepartment("Meta", meta());
        ciudadIngresada = prompt(mensaje);
        if(ciudadIngresada>=1 && ciudadIngresada<=5){
            mensajeFinal = caracteristicaCiudad(ciudadIngresada, meta());
            alert(mensajeFinal);
        }else{
            alert("La ciudad ingresada no es válida");
        }
        break;

    case "5":
        mensaje = getMessageByDepartment("Sucre", sucre());
        ciudadIngresada = prompt(mensaje);
        if(ciudadIngresada>=1 && ciudadIngresada<=5){
            mensajeFinal = caracteristicaCiudad(ciudadIngresada, sucre());
            alert(mensajeFinal);
        }else{
            alert("La ciudad ingresada no es válida");
        }
        break;

    default:
        alert("El departamento ingresado no es válido");
        break;
}

