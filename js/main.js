let cantidad = " ";
let cant = 0;
let producto = " ";
let precio = 0;
let reten = 145;
let oring = 30;
let crapodina = 250;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;


function realizarCompra() {

    alert(`
        Bienvenidos a:

        Retenes DBH S.A.!
    `);

    do {
        elegirProducto();
    } while (seguirComprando);  

};

function elegirProducto() {

    producto = prompt(`
    ¿Que productos desea compar?

    R - Retenes ($145 c/u + iva)
    O - Orings ($30 c/u + iva)
    C - Crapodinas ($250 c/u + iva)

    Por favor ingrese la letra del producto y presione "Aceptar".
    En caso contrario presione "Cancelar" para abandonar la compra`);

    if (producto === null) {
        return;
    }

    switch (producto.toUpperCase()) {
        case "R":
            precio = precioIva(reten);
            elegirCantidad();          
            break;
        case "O":
            precio = precioIva(oring);
            elegirCantidad();          
            break;
        case "C":
            precio = precioIva(crapodina);
            elegirCantidad();          
            break;
        default:
            alert(`
                * Alguno de los datos ingresados no es correcto.
                
                Por favor, vuelva a intentarlo.
            `);
            producto = "";
            elegirProducto()
            break;
    };

};

function precioIva(valorProducto) {

    let mostrarResultado = valorProducto * 1.21;
    return mostrarResultado;

};


function elegirCantidad() {

    cantidad = prompt(`
        ¿Cuantas unidades desea comprar?

        * maximo 6 unidades por operacion.

        Por favor ingrese la cantidad y presione "Aceptar".
        En caso contrario presione "Cancelar" para abandonar la compra.
    `);

    if (cantidad === null) {
        return;
    }

    switch (Number(cantidad)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            cant = (Number(cantidad));
            precioTotal += precio * cant;
            cantidadTotal += cant;
            seguirComprando = confirm("quiere seguir comprando?")    
            break;
        default:
            alert(`
                * Algun dato es incorrecto o ha ingresado mas unidades de lo permitido.

                Por favor, vuelva a intentarlo.
            `);
            cantidad = " ";
            elegirCantidad();
            break;
    };

};


realizarCompra ();

if (cantidad >= 1) {

    finalizar();

} else {
    anular();    
}

function finalizar() {

    alert("Ha comprado:" + "\n\n" +cantidadTotal+ " unidad(es)" + "\n\n" +"el monto total de la compra es de: $" + precioTotal.toFixed(2) + " *" + "\n\n" + "* i.v.a. incluido");
    
    let finalizarCompra = confirm ("¿Quiere finalizar la compra?");
        
    if (finalizarCompra) {
        alert(`
            Su compra ha sido procesado con exito!
    
            Gracias por su visita! Esperamos volver a verlo/a pronto!
    
            * Le invitamos a echarle un vistazo a nuestro futuro sitio web. 
        `);
    } else {
        anular()    
    };

}

function anular() {

    alert (`
    Gracias por su visita! Esperamos volver a verlo/a pronto!

    * Le invitamos a echarle un vistazo a nuestro sitio web. 
    `);
}