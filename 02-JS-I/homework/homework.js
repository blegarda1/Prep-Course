
const nuevaString = "Hola";

const nuevoNum = 11;

const nuevoBool = false;

const nuevaResta = 10 - 5 === 5;

const nuevaMultiplicacion = 10 * 4 === 40 ;

const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y; 
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  if(x == y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  if (num % 2 == 0) {
  return true;
 }
  return false;
}

function esImpar(num) {
  if (num % 3 == 1) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  return Math.pow(num,2);
}

function elevarAlCubo(num) {
  return Math.pow(num,3);
}

function elevar(num, exponent) {
  return Math.pow(num,exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function numeroRandom() {
  return Math.random(0, 1)
}

function esPositivo(numero) {
  if (numero === 0) {
    return false;
  } else if (numero > 0) {
    return "Es positivo";
  } else {
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
  return (str+'!');
}

function combinarNombres(nombre, apellido) {
  return (nombre + ' ' + apellido);
}

function obtenerSaludo(nombre) {
  return `Hola ${nombre}!`
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}


function retornarPerimetro(lado){
  return 4 * lado;
}


function areaDelTriangulo(base, altura){
  return base * altura / 2;
}


function deEuroAdolar(euro){
  return euro * 1.2;
}


function esVocal(letra){
  if (letra.length > 1) {
    return 'Dato incorrecto';
  } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal';
  } else {
    return 'Dato incorrecto';
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
