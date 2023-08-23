/* 1 Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/
 let ask = prompt("¿Eres bellisimo/a?");
 if(ask === "si"){
    alert("Ciertamente.");
 }
 else if ( ask === "no"){
    alert("No te creo.");
 }
 else{
    alert("Pregúntale a alguien.");
 }

 /* 2 Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm*/
 let pregu= parseInt(prompt("Escribe un numero para saber si es divisible por 2:"));
 if (pregu % 2 == 0){
    alert(pregu + " número es divisible entre 2.");
 }
 else{
    alert(pregu + " número no es divisible entre 2.");
 }

 /* 3 Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.*/
 let numero= parseInt(prompt("Escribe un numero para saber si es par:"));
 if (numero % 2 == 0){
    alert(numero + " es par.");
 }
 else{
    alert(numero + " no es par.");
 }

 /* 4 Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/
 let cliente = parseInt(prompt("Escribe un numero de cliente:"));
 if (cliente === 1000){
    document.write ("Ganaste un premio.")
 }
 else {
    document.write ( cliente, " Lo sentimos, sigue participando.")
 }

 /* 5 Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.*/
 let numero1 = prompt("Escribe un número:");
 let numero2 = prompt("Escribe otro número:");
 if(numero1 < numero2){
    alert( "El primer número (" + numero1 + ") es menor que el segundo número (" + numero2 + ").")
 }
 else if(numero1>numero2){
    alert ("El segundo número (" + numero2 + ") es menor que el primer número (" + numero1 + ").")
 }
 else{
    alert("Introduce números diferentes.")
 }

 /*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.*/
 let number1 = prompt("Escribe el primer número:")
 let number2 = prompt("Escribe el segundo número:")
 let number3 = prompt("Escribe el tercer número:")
 if(number1 > number2 && number1 > number3){
    alert ("El numero mayor es " + number1 +".")
 }
 else if(number2 > number1 && number2 > number3){
    alert ("El numero mayor es " + number2 +"." )
 }
 else if(number3 > number1 && number3 > number2){
    alert ("El numero mayor es " + number3 + ".")
 }
 else{
    alert("Intenta nuevamente, ingresa numeros diferentes.")
 }

 /*7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/
let day = prompt("Escribe un dia de la semana:").toLowerCase();
switch (day){
    case "lunes":
        console.log("Vamos a empezar la semana.");
        break;
    case "viernes":
        console.log("Porfin se acabó la semana!");
        break;
    case "sabado":
        console.log("Puedes dormir hasta tarde.")
        break;
    case "domingo":
        console.log("¿Vamos a correr?")
        break;
    default:
        console.log("Ánimo!")
}

/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/
let note = prompt("Ingresa tu calificacion:")
if(note<1 || note>10){
    alert("Error; por favor ingresa una nota entre 1 y 10.")
}
else if(note < 6){
    document.write("Reprobado.")
}
else if(note >= 6 && note <= 8){
    document.write("Regular.")
}
else if(note >= 9 && note < 10 ){
    document.write("Bien.")
}
else if(note == 10){
    document.write("Excelente.")
}

/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

let precioBase = 50;
let topping = prompt("¿Desea adicionar un topping a su helado Si/No ?").toLowerCase();
if (topping == "no"){
    alert("Su helado cuesta 50MXN.")
}
else if (topping == "si"){
    let sabor = prompt("¿De qué sabor desea el topping?")
    switch (sabor){
        case "oreo":
            alert("Su helado cuesta " + ( precioBase + 10) +" MXN.");
            break;
        case "kitKat":
            alert("Su helado cuesta " + ( precioBase + 15) +" MXN.");
            break;
        case "brownie":
            alert("Su helado cuesta " + ( precioBase + 20) +" MXN.");
            break;
        default:
            alert("No tenemos este topping, lo sentimos.")
}}
else {
    alert("Respuesta inválida, por favor responda 'si' o 'no'");
}


/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

let Course = 4999 
let Carrera = 3999
let Master = 2999
let tcourse = 2
let tcarrera = 6
let tmaster = 12
let facebook = 0.2
let google = 0.15
let jesua = 0.5
let costoTotalCourse = Course*tcourse
let costoTotalCarrera = Carrera*tcarrera
let costoTotalMaster = Master*tmaster


alert("El programa educativo contempla 3 diferentes niveles; course, carrera y master.")
let nivel = prompt("Por favor escriba el programa de su eleccion:").toLowerCase();
switch(nivel){
    case "course":
        alert("El programa " + nivel + " cuesta $ " + Course + " MXN mensuales y dura " + tcourse + " meses.");
        break;
    case "carrera":
        alert("El programa " + nivel + " cuesta $ " + Carrera + " MXN mensuales y dura " + tcarrera + " meses.");
        break;
    case "master":
        alert("El programa " + nivel + " cuesta $ " + Master + " MXN mensuales y dura " + tmaster + " meses.");
        break;
    default:
        alert("Opción ivalida, por favor ingrese uno de los programas; course, carrera, master.")
}

let bene = prompt("¿Es beneficiario de alguna beca Si/No?")
if(bene == "no"){
    switch(nivel){
        case "course":
            alert("El costo total del programa " + nivel + " es de $ " + costoTotalCourse + ".");
            break;
        case "carrera":
            alert("El costo total del programa " + nivel + " es de $ " + Carrera * tcarrera +".");
            break;
        case "master":
            alert("El costo total del programa " + nivel + " es de $ " + Master * tmaster +".");
            break;
        default:
            alert("Opcion ivalida, por favor ingrese Si o No.")
}}
else if (bene == "si"){
    let beca = prompt("Escriba el nombre de la beca: Facebook, Google, Jesua: ").toLowerCase();
    if ( beca == "facebook"){
        switch(nivel){
            case "course":
                alert("El costo total del programa " + nivel + " con descuento es de $ " + (costoTotalCourse - (costoTotalCourse*facebook)) + ".");
                break;
            case "carrera":
                alert("El costo total del programa " + nivel + " con descuento es de $ " + (costoTotalCarrera - (costoTotalCarrera*facebook)) +".");
                break;
            case "master":
                alert("El costo total del programa " + nivel + " con descuento es de $ " + (costoTotalMaster - (costoTotalMaster*facebook)) +".");
                break;
            default:
                alert("Opcion ivalida, por favor ingrese uno de los programas; course, carrera, master.")
    }}
    else  if ( beca == "google"){
        switch(nivel){
            case "course":
                alert("El costo total del programa con descuento es de $ " + (costoTotalCourse - (costoTotalCourse*google)) + ".");
                break;
            case "carrera":
                alert("El costo total del programa con descuento es de $ " + (costoTotalCarrera - (costoTotalCarrera*google)) +".");
                break;
            case "master":
                alert("El costo total del programa con descuento es de $ " + (costoTotalMaster - (costoTotalMaster*google)) +".");
                break;
            default:
                alert("Opcion ivalida, por favor ingrese uno de los programas; course, carrera, master.")
    }}
    else  if ( beca == "jesua"){
        switch(nivel){
            case "course":
                alert("El costo total del programa con descuento es de $ " + (costoTotalCourse - (costoTotalCourse*jesua)) + ".");
                break;
            case "carrera":
                alert("El costo total del programa con descuento es de $ " + (costoTotalCarrera - (costoTotalCarrera*jesua)) +".");
                break;
            case "master":
                alert("El costo total del programa con descuento es de $ " + (costoTotalMaster - (costoTotalMaster*jesua)) +".");
                break;
            default:
                alert("Opcion ivalida, por favor ingrese uno de los programas; course, carrera, master.")
    }}
    else{
        alert( "Beca invalida")
    }
}

/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

let precioCoche= 0.20
let precioMoto = 0.10
let precioAutobus= 0.50

let vehiculo = prompt("Ingrese clase de vehiculo:").toLowerCase()
let kilometraje=prompt("Ingrese Kilometros recorridos")
if(kilometraje > 0 || kilometraje<=100){
    switch (vehiculo){
        case("coche"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioCoche) + 5) +".")
            break;
        case("moto"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioMoto) + 5) +".")
            break;
        case("autobus"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioAutobus) + 5) +".")
            break;
        default:
            alert("Vehiculo no valido.")
    }
}
else if ( kilometraje>100){
    switch (vehiculo){
        case("coche"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioCoche) + 10) +".")
            break;
        case("moto"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioMoto) + 10) +".")
            break;
        case("autobus"):
            alert("El combustible para su " + vehiculo +" cuesta " + ((kilometraje*precioAutobus) + 10) +".")
            break;
        default:
            alert("Vehiculo no valido.")
    }
}
else{
    alert("Vehiculo invalido. Solo válido para coches, moto, autobuses.")
}




