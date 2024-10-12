//Grupo #3
//Página elegida, TEMU

//Variables simples

let totalProductos = 1500;
let itemsEnCarrito = 6;
let nombreUsuario = "Andres";
let codigoDescuento = "OFERTATEMU";
const envioGratis = true;

//Variables compuestas
let productosDestacados = ["Laptop", "Zapatos", "Reloj", "Bolso"];
let vendedor = {
    nombre: "Tienda TEMU [premium]",
    numEstrellas: 4.8
};

//String - cadena de caracteres

let codDescuento = "OFERTATEMU";
console.log(codDescuento.length);

//Métodos 
console.log(codDescuento.trim());
console.log(codDescuento.includes('TEMU[premium]'));
console.log(codDescuento.toUpperCase());
console.log(codDescuento.toLowerCase());

//Escribir de manera estandarizada

console.log(`Código de descuento: ${codDescuento}`);

let precioProducto = "18.99";
let precioProd = 45.25;

console.log(+precioProducto + precioProd);

//Operadores ternarios
let puntosUsuario = 800;
let puntosRequeridos = 1000;

puntosUsuario >= puntosRequeridos ? console.log("Tienes suficientes puntos para el descuento") : console.log("Sigue acumulando puntos");

//Valores verdaderos - truthy
let nivelMembresia = 2;
nivelMembresia === 4 ? console.log("Membresía premium activada") : console.log("Actualiza tu membresía");

//Valores falsos - falsy
let usuario = "";
!usuario ? console.log("No existe usuario") : console.log("Usuario registrado");

//Comparación
let codProd = "222678";
codProd === 222678 ? console.log("Código encontrado") : console.log("Código no registrado");

//Loops
const productosRecomendados = ["Tablet", "Audífonos", "Cámara", "Monitor"];
productosRecomendados.forEach(producto => { console.log(producto); });

console.log(productosDestacados);

//Funciones
//Anónima y autoejecutada

//Función declarada
function mostrarBanner() {
    console.log("¡Bienvenido a la campaña de descuento de TEMU!");
}
mostrarBanner();

//Argumentos
const validarCupon = function (cupon, descuento) {
    console.log(`El cupón ${cupon} te ha otorgado un ${descuento}% de descuento`);
};

validarCupon("TEMU50", 50);

//Argumentos opcionales
const validarEnvioGratis = function (envio = "gratis") {
    console.log(`El envío ${envio} está disponible para tu compra`);
};
validarEnvioGratis();

//Arrow function
const mostrarProducto = () => {
    console.log("Nuevos productos agregados al catálogo");
};
mostrarProducto();

const registrarCompra = (monto = 100) => {
    console.log("Compra registrada por un total de: $" + monto);
};
registrarCompra();

//Objetos

const datosClientes = {
    nombre: "Andrés Tufiño",
    edad: "19",
    direccion: {
        ciudad: "Quito",
        telefono: "0995847632"
    },
    miembroVIP: false,
    favoritos: ["Computadoras", "Cámaras", "Ropa"]
};

//JSON

const datosClientes1 = {
    "nombre": "Andrés Tufiño",
    "edad": "19",
    "direccion": {
        "ciudad": "Quito",
        "telefono": "0983799163"
    },
    "miembroVIP": false,
    "favoritos": ["Computadoras", "Cámaras", "Ropa"]
};

console.log(datosClientes1.nombre);
console.log(datosClientes1.edad);
console.log(datosClientes1.direccion);
console.log(datosClientes1.miembroVIP);
console.log(datosClientes1.favoritos);

//Desestructuración
const datosUser = { nombre, edad, direccion, miembroVIP, favoritos: best } = datosClientes;

//Propiedades

//Agregar propiedades
datosClientes.producto = "Reloj.jpg";
console.log(datosClientes);

//Eliminar propiedades
delete datosClientes.miembroVIP;
console.log(datosClientes);

//Datos sin contenido

Object.values(datosClientes).includes("") ? console.log("error") : console.log("OK");

//Formulario1
const carritoCompra = {
    nameC: "Mochila",
    priceC: 30.00
};

//Formulario2
const usuarioC = {
    nameCl: "Carlos",
    telf: "0995847632"
};

//Unión de los formularios
const ordenCompra = { ...usuarioC, ...carritoCompra };
console.log(ordenCompra);