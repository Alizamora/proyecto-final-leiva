/*
* Declaración de varibles
*/

//Cantidad
let cantidadMate;
let cantidadSociales;
let cantidadFisica;
let cantidad;

///Variables de respuesta tipo string
let compra;
let repetir;

//Subtotales
let subMate;
let subSociales;
let subFisica;

//Variables que se imprimen al final en la consola 
let categoria;
let descuento;
let idCliente;
let subTotal;
let total;
let porcentaje;

//Precio de libros 
let precioMate = 2000;
let precioSociales = 5000;
let precioFisica = 4000;

//Variables de informaciÓn del cliente
let clienteNombre = '';


/************************
 * INICIO DEL PROGRAMA
************************/

//Pregunta inicial
compra = prompt ('¡Bienvenido! ¿Desea realizar una compra? En caso de no realizarla, por favor digite la letra "q" para finalizar este programa.');

 if (compra !== 'q' && compra !== 'Q') {
    
    while (compra != 'q' && compra != 'Q') {
    
    
        let cantidadMate = parseInt(prompt('¿Desea comprar libros de Matemáticas? (Costo: 2000) Por favor, escriba la cantidad de libros de Matemáticas que desea adquirir. (En caso de no adquirir ningún libro de este tipo, digite "0")'));
    
        let cantidadSociales= parseInt(prompt('¿Desea comprar libros de Sociales? (Costo: 5000) Por favor, escriba la cantidad de libros de Sociales que desea adquirir. (En caso de no adquirir ningún libro de este tipo, digite "0")'));
            
        let cantidadFisica= parseInt(prompt('¿Desea comprar libros de Física? (Costo: 4000) Por favor, escriba la cantidad de libros de Física que desea adquirir. (En caso de no adquirir ningún libro de este tipo, digite "0")'));
    
            
        // Operación de cantidad
        cantidad = cantidadMate + cantidadSociales + cantidadFisica;
            
        //Subtotales
        subMate = cantidadMate * precioMate;
        subSociales = cantidadSociales * precioSociales;
        subFisica = cantidadFisica * precioFisica;
            
        // Operación de subtotal
        subTotal = subMate + subSociales + subFisica;
            
            
        //Categorías
        categoria = parseInt(prompt('Por favor, ingrese su tipo de categoría (1, 2, 3).'));
            
        switch (categoria){
            case 1:
            descuento = (30 * subTotal) / 100;
            porcentaje = 'Su descuento es del 30%';
            break;
            case 2:
            descuento = (20 * subTotal) / 100;
            porcentaje = 'Su descuento es del 20%';
            break;
            case 3:
            descuento = (10 * subTotal) / 100;
            porcentaje = 'Su descuento es del 10%';
            default:
            descuento = 0;
            porcentaje = 'Ningún descuento aplicado';
            break;
        }
                    
        // Operación de total
        total = subTotal - descuento;
            
        // Información del cliente
        clienteNombre= prompt('Por favor, ingrese su nombre.');
        idCliente=prompt('Por favor, ingrese su ID.');
                
        console.log('Nombre del cliente: ' + `${clienteNombre}`);
        console.log('ID del cliente: ' + `${idCliente}`);
        console.log('Cantidad de libros adquiridos: ' + `${cantidad}`);
        console.log('Subtotal: ' + `${subTotal}`);
        console.log(`${porcentaje}` + ' = ' + `${descuento}`);
        console.log('Total: ' + `${total}`);

        compra = prompt('¿Desea realizar otra compra? Para finalizar este programa, digite la letra q.');
    }
} else {
    //Salida del programa
    salir = prompt('Está a punto de salir del programa. Digite la letra "q" para finalizar.');
} 



