
//  FUNCIONES RELACIONADAS
//  Formato: código fuente en JavaScript, Sublime Text o VisualStudio. 
//  Sugerencia: para llevar adelante esta tarea, te sugerimos pensar un proceso complejo, descomponerlo al menos en tres partes, y realizar una función que se encargue de cada una de ellas. 
  
//  >> Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.
//  >>Aspectos a incluir en el entregable:
//  Archivo HTML y archivo JavaScript referenciados, que incluyan la definición y llamada de al menos tres funciones.

// <!-- inicio del programa -->




function myFunction() { // <!-- al hacer click -->




var Hola = alert("Hola gracias por comprar en el Rey de las Medias") 
        
    
    while (Hola != "ESC") { 
    function Pedir() {
        return prompt("Cual media quieres comprar?")
    }

    function Catalogo() {
        return prompt("En que Numero se encuentra?")
    }

    let producto = Pedir();
    let tipo = Catalogo();

        console.log(producto);
        console.log(tipo)

    function asignacionProducto(producto, categoria) {
        return "Tu carrito de compras:" + "\n" + "Nombre del producto: " + producto + "\n" + "Categoria: " + categoria;
    }

    alert(asignacionProducto(producto, tipo))
   
        break

    }


// <!-- Calcular el iva -->

let calcularIva = parseInt(alert("Vamos a sumar el iva al precio"))
let ingresarMonto = parseInt(prompt("Ingresar El precio:")) 

    const sumarIva = (monto, iva) => monto + iva; 
    const precioIva = impuesto => impuesto * 0.21;

let calcularPrecio = sumarIva (ingresarMonto, precioIva(ingresarMonto)); 

alert("El precio total es: $" + calcularPrecio)

}