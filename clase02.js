//Ingreso de datos por el usuario

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero"));

// alert("El resultado de tu operacion es: " + (numero1+numero2));


//Switch
let operacion = prompt("Ingrese una operacion");
let mensaje;
switch (operacion){
    case "+":
        mensaje="El resultado de la operacion es: " + (num1+num2)
        break;
    case "-":
        mensaje="El resultado de la operacion es: " + (num1-num2)
        break
    case "*":
        mensaje="El resultado de la operacion es: " + (num1*num2)
        break;
    case "/":
        mensaje="El resultado de la operacion es: " + (num1/num2)
        break;

}

alert(mensaje)