// ============================================================ //
// => PRE-ENTREGA 01
// ============================================================ //

// => VARIABLES GLOBALES
let agregarMas = false; 
let total = 0;
let precio = 0;
let cantidad = 0;
let producto = "";
let array = [];

// => OBJETOS PRODUCTOS.
class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre,
        this.precio = Number(precio),
        this.stock = stock
    };

    actualizarStock(x) {
        this.stock = this.stock - x;
    };
};

// => ARRAY DE PRODUCTOS.
const arrayProductos = [];
arrayProductos.push(new Producto("Retenes", 300, 8000));
arrayProductos.push(new Producto("O'rings", 15, 15000));
arrayProductos.push(new Producto("Crapodinas", 900, 800)); 

// => FUNCION PARA TODO EL PROCESO DE COMPRA.
function comprar() {

    // => mensaje de bienvenida + consulta.
    if (confirm(`Bienvenido a RETENES DBH S.A
    
        ¿Como desea ordenar los productos?

        * Presione 'Aceptar' si quiere verlos de menor a mayor precio.
        * Presione 'Cancelar' si quiere verlos de mayor a menor precio.
    `)) {

        // => llamado a funcion que ordena los precios de menor a mayor.
        preciosMenorMayor();
    } 
    
    else {

        // => llamado a funcion que ordena los precios de mayor a menor.
        preciosMayorMenor();
    };

    if (total > 0) {
        // => llamado de funciones para finalinalizar compra si la cantidad del producto seleccionado es mayor a 0.
        totalAPagar(envio(descuento(total)));
    };
};

// => FUNCION ORDENAR PRECIOS DE MENOR A MAYOR.
function preciosMenorMayor() {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    console.log(arrayProductos);
    carritoDeCompras();
};

// => FUNCION ORDENAR PRECIOS DE MAYOR A MENOR.
function preciosMayorMenor() {
    arrayProductos.sort((a,b) => b.precio - a.precio);
    console.log(arrayProductos);
    carritoDeCompras();
};

// => FUNCION AGREGAR PRODUCTOS AL CARRITO DE COMPRAS.
function carritoDeCompras() {


    // let array = [];
    // => forma en como se mostraran los productos al momento de listarlos.
    for (i = 0; i < arrayProductos.length; i++) {
        array.push(arrayProductos[i].nombre + ": "+ " $" + arrayProductos[i].precio + " (+ i.v.a.)");
    };
    

    do {

        // => mensaje para seleccion de producto + consulta.
        let producto = prompt("Por favor, seleccione el producto que deseas agregar al carrito:\n\n" + "1 - " + array[0] + "\n2 - " + array[1] + "\n3 - " + array[2] + "\n\n" + "* Escriba 1, 2 ó 3 y presione 'Aceptar' para continuar .\n" + "*  Presione 'Cancelar' para abandonar la compra.");
        
        // => mensaje al salir sin realizar compra.
        if (producto == null) {
            alert(`Gracias por su visita! Esperamos volver a verlo/a pronto!

            * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
            `);
            return;
        };

        // mensaje para seleccion de cantidad + consulta.
        let cantidad = prompt(`¿Cuantas unidades desea agregar al carrito?
        
        * Ingrese la cantidad y presione 'Aceptar' para continuar.
        * Presione 'Cancelar' para abandonar la compra.
        `);

        // => mensaje al salir sin realizar compra.
        if (cantidad == null) {
            alert(`Gracias por su visita! Esperamos volver a verlo/a pronto!

            * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
            `);
            return;
        };
        
        // => mensaje de error y redireccionado a eleccion de producto.
        if (cantidad === "0" || cantidad === "" || isNaN(Number(cantidad))) {
            alert(`[ADVERTENCIA]

            Alguno de los datos ingresados es incorrecto.
                            
            * Por favor intente nuevamente.
            `);
            carritoDeCompras();
            return;
        };

        // => cantidad debe ser un numero.
        cantidad = Number(cantidad);

        switch(producto) {

            // => opcion numero 1 (varia en funcion del orden seleccionado) para eleccion de producto.
            case "1": 
            case arrayProductos[0].nombre:
                arrayProductos[0].actualizarStock(cantidad);

                // => mensaje a emitir cuando no queda stock solicitado del producto seleccionado. 
                if (arrayProductos[0].stock < 0 || isNaN(cantidad)) {
                    alert("[ADVERTENCIA]\n\n" + "En este momento no tenemos en stock la cantidad de unidades que desea agregar.\n\n" + "* Por favor intente nuevamente.");
                    arrayProductos[0].stock = arrayProductos[0].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                    carritoDeCompras();
                    return;
                }
                
                // => calculo de precio para la opcion de producto numero 1 (varia en funcion del orden seleccionado).
                else {
                    precio = arrayProductos[0].precio;
                };
                break;

            // => opcion numero 2 (varia en funcion del orden seleccionado) para eleccion de producto.
            case "2": 
            case arrayProductos[1].nombre:
                arrayProductos[1].actualizarStock(cantidad);

                // => mensaje a emitir cuando no queda stock solicitado del producto seleccionado. 
                if (arrayProductos[1].stock < 0 || isNaN(cantidad)) {
                    alert("[ADVERTENCIA]\n\n" + "En este momento no tenemos en stock la cantidad de unidades que desea agregar.\n\n" + "* Por favor intente nuevamente.");
                    arrayProductos[1].stock = arrayProductos[1].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                    carritoDeCompras();
                    return;
                } 

                // => calculo de precio para la opcion de producto numero 2 (varia en funcion del orden seleccionado).
                else {
                    precio= arrayProductos[1].precio;
                };
                break;

            // => opcion numero 3 (varia en funcion del orden seleccionado) para eleccion de producto.
            case "3": 
            case arrayProductos[2].nombre:
                arrayProductos[2].actualizarStock(cantidad);

                // => mensaje a emitir cuando no queda stock solicitado del producto seleccionado. 
                if (arrayProductos[2].stock < 0 || isNaN(cantidad)) {
                    alert("[ADVERTENCIA]\n\n" + "En este momento no tenemos en stock la cantidad de unidades que desea agregar.\n\n" + "* Por favor intente nuevamente.");
                    arrayProductos[2].stock = arrayProductos[2].stock + cantidad;
                    precio = 0;
                    cantidad = 0;
                    carritoDeCompras();
                    return;
                } 
                
                // => calculo de precio para la opcion de producto numero 2 (varia en funcion del orden seleccionado).
                else {
                    precio= arrayProductos[2].precio;
                };
                break;

            // => mensaje de error y redireccionado a eleccion de producto.
            default:
                alert(`[ADVERTENCIA]

                Alguno de los datos ingresados es incorrecto.
                                
                * Por favor intente nuevamente.
                `);
                precio = 0;
                carritoDeCompras();
                return;

        };

        // => mensaje para agregar mas productos + consulta.
        agregarMas = confirm(`
            ¿Desea agregar productos al carrito?
                    
            * Presione "Aceptar" si desea agregar mas productos al carrito.
            * Presione "Cancelar" si prefiere pasar a finalizar la compra.        
        `);

        // => calculo del total.
        total += (Number(precio) * 1.21).toFixed(0) * cantidad;

    // => convierte a agregarMas en true.
    } while (agregarMas);
};

// => FUNCION DESCUENTO.  
function descuento(total) {

    // => aplica un 15% de descuento si se superan los $3.000 en la compra.
    if (total >= 1000) {
        total = total * 0.85;
        alert("Por superar los $10.000 ha obtenido un:\n\n" +  "* 15% de descuento en su compra.\n\n" + "El subtotal de la misma es de: " + "$" + total + " (i.v.a. incluido)");
    };

     // => devuelve el total sin descuento.
    return total;
};

// => FUNCION ENVIO A DOMICILIO.
function envio(total) {

    // => mensaje para envio a domicio + consulta
    let confirmacion = confirm(`¿Prefiere retirar por nuestro local o que lo enviemos a su domicilio?
    
        Envio gratuito para compras mayores a $10.000.
        Para el resto de las compras el costo de envio es de $300.
            
        * Presione en 'Aceptar' si prefiere que lo enviemos a domicilio.
        * Precione 'Cancelar' si prefiere retirar por el local.        
    `);

    // => si se superan los $2.000 en la compra, el envio no tiene costo.
    if (confirmacion && total >= 10000) {
        alert("Ha superado los $10.000 en su compra.\n\n" + "* El envio es gratuito.");
    } 
    
    // => si no se superan los $2.000 en la compra, el envio tiene un costo de $300.
    else if (confirmacion && total < 10000 && total != 0) {
        total = total + 300;
        alert("No ha superado los $10.000 en tu compra.\n\n" + "* El costo de envio es de $300 (i.v.a. incluido)");
    };

    // => devuelve el total si no se selecciona envio a domicilio.
    return total;
};

// => FUNCION TOTAL DE LA COMPRA.
function totalAPagar(total) {

    // => calculo del total a abnorar.
    total = total 

    // => mensaje con el total a aboar.
    let confirmacionB = confirm("El monto total a abonar es de $" + total + " (i.v.a. incluido)" + "\n\n¿Desea finalizar la compra?" + "\n\n* Presione en 'Aceptar' para finalizar la compra." + "\n* Presione en 'Cancelar' para anular la compra.");
    
    // => mensaje de finalizacion de compra y despedida.
    if (confirmacionB) {
        alert(`Su compra ha sido procesada con exito!
    
        Gracias por su visita! Esperamos volver a verlo/a pronto!

        * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
        `);
    } 
    
    // => mensaje de anulacion de compra y despedida.
    else {
        // => llamado a funcion anular.
        anular();
    };
};

// => FUNCION ANULACION.
function anular() {

    // => mensaje de anulacion de compra y despedida.
    alert (`[ADVERTENCIA] Su compra ha sido anulada!
    
        Gracias por su visita! Esperamos volver a verlo/a pronto!

        * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
    `);
};

// => llamado a funcion para iniciar la compra.
comprar();

// => muestra el stock de los productos luego de realizada la compra.
console.log(arrayProductos);