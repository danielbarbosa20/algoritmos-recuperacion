// condicionales
function liquidacionComision(){
    let nombre = prompt("Ingrese el nombre del vendedor:");
    let ventas = parseFloat(prompt("Ingrese el valor de las ventas del mes:"));
    let antiguedad = parseInt(prompt("Ingrese los años de antiguedad:"));
    let porcen = 0;
    let comi = 0;

    if (ventas >= 8000000 && antiguedad >= 2) {
        porcen = 10;
        comi = ventas * 0.10;
    } else if (ventas >= 3000000) {
        porcen = 5;
        comi = ventas * 0.05;
    } else {
        porcen = 0;
        comi = 0;
}

    console.log("El nombre del vendedor es : " + nombre);
    console.log("La ventas realizadas son de : " + ventas);
    console.log("El porcentaje de comision es de : " + porcen );
    console.log("El valor de la comision es de : " + comi);
}

function ClasificacionPrestamo(){
    let nombre = prompt("Ingrese el nombre del solicitante");
    let ingresos = parseFloat(prompt("Ingrese los ingresos mensuales"));
    let gastos = parseFloat(prompt("Ingrese los gastos mensuales"));   
    let historial = prompt("Ingrese el historial crediticio (posi o neg)");
    let dineroDisponible = ingresos - gastos;
    let resultado = "";

    if (ingresos <= gastos) {
        resultado = "Rechazada por capacidad de pago insuficiente";
    } else if (historial === "negativo") {
        resultado = "Rechazada por historial crediticio";
    } else if (historial === "positivo" && dineroDisponible >= 1000000) {
        resultado = "Preaprobada";
    } else if (dineroDisponible < 1000000) {
        resultado = "Pendiente de revision";
    } else {
        resultado = "Datos de historial no validos";
}

console.log("El nombre es: " + nombre);
console.log("El dinero disponible es de: " + dineroDisponible);
console.log("El resultado de la evaluacion es de: " + resultado);
}

// bucles

function registroVentas(){
    let cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas a registrar:"));
    let totalVendido = 0;
    let ventasAltas = 0;
    let ventaMasAlta = 0;

    for (let i = 1; i <= cantidadVentas; i++) {
    let valorVenta = parseFloat(prompt("Ingrese el valor de la venta"));

    totalVendido += valorVenta;

    if (valorVenta > 200000) {
        ventasAltas++;
    }

    if (i === 1) {
        ventaMasAlta = valorVenta;
    } else if (valorVenta > ventaMasAlta) {
        ventaMasAlta = valorVenta;
    }
}

let promedio = totalVendido / cantidadVentas;

console.log("Cantidad de ventas: " + cantidadVentas);
console.log("Total recaudado: " + totalVendido);
console.log("Promedio por venta: " + promedio);
console.log("Ventas superiores a 200000: " + ventasAltas);
console.log("Venta mas alta: " + ventaMasAlta);
}

function registroTemperatura(){
    let cantidadDias = parseInt(prompt("Ingrese la cantidad de dias a registrar:"));
    let sumaTemperaturas = 0;
    let temperaturaMaxima = 0;
    let temperaturaMinima = 0;
    let diasCalurosos = 0;

    for (let i = 1; i <= cantidadDias; i++) {
    let temperatura = parseFloat(prompt("Ingrese la temperatura del dia"));

    sumaTemperaturas += temperatura;

    if (i === 1) {
        temperaturaMaxima = temperatura;
        temperaturaMinima = temperatura;
    } else {
        if (temperatura > temperaturaMaxima) {
            temperaturaMaxima = temperatura;
        }
        if (temperatura < temperaturaMinima) {
            temperaturaMinima = temperatura;
        }
    }

    if (temperatura > 30) {
        diasCalurosos++;
    }
}

let promedio = sumaTemperaturas / cantidadDias;

console.log("Cantidad de dias registrados: " + cantidadDias);
console.log("Temperatura promedio: " + promedio);
console.log("Temperatura maxima: " + temperaturaMaxima);
console.log("Temperatura minima: " + temperaturaMinima);
console.log("Dias superiores a 30C: " + diasCalurosos);
}