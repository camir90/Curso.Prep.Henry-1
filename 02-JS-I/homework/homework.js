// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { straightThroughBufferTask } = require("simple-git/src/lib/tasks/task");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola" ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 == 4;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código: 
  return (x+y);
}

function resta(_x, _y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return (_x-_y);

}

function multiplica(_x, _y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return (_x*_y);

}

function divide(_x, _y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return (_x/_y);
}

function sonIguales(_x, _y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (_x === _y) {
    return true;
  }
  else{
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    return true;
  }
  else{
    return false;
  }
}

function menosQueNoventa(_num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (_num < 90){
   return true;
  }
  else{
   return false;
  }
}

function mayorQueCincuenta(_num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (_num>50){
    return true;
  }
  else{
    return false;
  }
}

function obtenerResto(_x, _y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return (x%y);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 1) {
    return true;
  }
  else{
    return false
  }
}

function elevarAlCuadrado(_num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(_num,2);
}

function elevarAlCubo(_num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(_num,3);
}

function elevar(_num, _exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(_num,_exponent);
}

function redondearNumero(_num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondear = Math.round(_num);
  return redondear;
}

function redondearHaciaArriba(_num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondear = Math.ceil(_num);
return redondear;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numeroRandom = Math.random(1)
  return numeroRandom;
}


function esPositivo(_numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (_numero>0) {
    return "Es positivo";
  }
  else if (_numero<0) {
    return "Es negativo";
  }
  else (_numero === 0)
  return false
}

function agregarSimboloExclamacion(_str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return (_str + "!");
}

function combinarNombres(_nombre, _apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return ("Soy" + _nombre + _apellido);
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return ("Hola "+ nombre + "!");

}

function obtenerAreaRectangulo(_alto, _ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return (_alto*_ancho) ;
}


function retornarPerimetro(_lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return (_lado*4) ;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return(base*altura/2);

}


function deEuroAdolar(_euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return (1.20 * _euro)
  
}


function esVocal(_letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var vocal1 = "a"
  var vocal2 = "e"
  var vocal3 = "i"
  var vocal4 = "o"
  var vocal5 = "u"
  if (_letra === vocal1 || _letra === vocal2 || _letra === vocal3 || _letra === vocal4 || _letra === vocal5) {
    return "Es vocal"
  }else{
    return "Dato incorrecto"
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
