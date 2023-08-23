let edad=18
if(edad>=18){//Si la condicion es correcta
    console.log("Eres mayor de edad, pasa por tu cerveza");
}
else{ //Si no es correcta
    console.log("Vete al kinder");
    document.write("<p>Hola</p>");
}

let semaforo = "verde"
if(semaforo =="rojo"){
    console.log("Detente!")
} 
else if (semaforo=="amarillo"){
    console.log("Anvanza mas rapido")
}
else if(semaforo=="verde"){
    console.log("Avanza")
}

let color = "ROsa"
let minusculas= color .toLowerCase();
if(minusculas =="rojo"){
    console.log("Detente!")
} 
else if (minusculas=="amarillo"){
    console.log("Anvanza mas rapido")
}
else if(minusculas=="verde"){
    console.log("Avanza")
}
else{
    console.log("Color invalido")
}