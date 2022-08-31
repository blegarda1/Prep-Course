// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y) {
    return x;
  } if (y > x) {
    return y;
  } else if (x == y) {
    return x || y;
  }
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return 'Allowed';
  } else if (edad < 18) {
    return 'Not allowed';
  }
}
  
function conection(status) {
  if (status == 1) {
    return 'Online';
  } else if (status == 2) {
    return 'Away';
  } else {
    return 'Offline';
  }
}

function saludo(idioma) {
  if (idioma == 'aleman') {
    return 'Guten Tag!';
  } else if (idioma == 'mandarin') {
    return 'Ni Hao!'
  } else if (idioma == 'ingles') {
    return 'Hello!'
  } else {
    return 'Hola!'
  }
}

function colors(color) {
  if (color == 'blue'){
    return 'This is blue';
  } else if (color == 'red'){
    return 'This is red';
  } else if (color == 'green'){
    return 'This is green';
  } else if (color == 'orange'){
    return 'This is orange';
  } else {
    return 'Color not found';
  }
}

function esDiezOCinco(numero) {
  if (numero == 10 || numero == 5){
    return true;
  } else {
    return false;
  }
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
  if (numero == Math.floor(numero)) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
  } else if (numero % 3 === 0) {
    return 'fizz';
  } else if (numero % 5 === 0) {
    return 'buzz';
  }  else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1===0 || num2 ===0 || num3===0) {
    return "Error"
  } if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos"
  } if (num1 > 0 && num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo"
  } if (num3 > 1 && num3 > num2) {
    return num3 + 1;
  } else {
   return false
  }
}

function esPrimo(numero) {
  if(numero < 2) {
    return false;
  }else if(numero === 2) {
    return true;
  } for(i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  } 
  return true;
}
function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
