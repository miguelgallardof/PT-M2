
// let y var:

/* var varOne = 'Hola var';
let letOne = 'Hola let';

if (true) {
    var varOne = 'Chau var';
    let letOne = 'Chau let';
}

console.log(varOne); // 'Chau var'
console.log(letOne); // 'Hola let' */
// ----------------------------------------------------------------------------

// const:
/* 
const fijo = 'Hola';
fijo = 'Chau';

console.log(fijo); */ 
// -----------------------------------------------------------------------------
// cuando la variable declarada con CONST es un OBJETO o ARREGLO:
/* const fijo = { saludo :'Hola'};
fijo.saludo = 'Buenass';

console.log(fijo);  */

// const arrayFijo = [1,2,3,4,5];
// arrayFijo.push(6);
// console.log(arrayFijo);  
// ----------------------------------------------------------------------------

// let y var en ciclo For:
// var i:
/* var creaFuncion = function() {
    var arreglo = [];
    for ( var i = 0; i < 3; i++){
      arreglo.push(
        function(){
          console.log(i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  arr[0]() // 3 
  arr[1]() // 3
  arr[2]() // 3 */

// let i:
/* 
var creaFuncion = function(){
    var arreglo = [];
    for ( let i=0; i < 3; i++){
      arreglo.push(
        function(){
          console.log(i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  arr[0]() 
  arr[1]() 
  arr[2]() */
// ----------------------------------------------------------------------------

// Arrow functions:
// Cuerpos con Expresiones
const pares = [0, 2, 4, 8];

/* var impares = pares.map(function(num) {
    return num + 1;
});
console.log(impares) */

/* var impares = pares.map((p) => {
    return p + 1;
}) ;
console.log(impares) */
// var impares = pares.map(p =>  p + 1) ;
// console.log(impares)

// var numPrimos = pares.map((p, i) =>  p + 2*i + 3) ;
// console.log(numPrimos);
// console.log(impares); 

// ----------------------------------------------------------
// Cuerpos con Statements

// var nums = [4, 34, 15, 23, 35, 12, 60, 35555];
// var cincos = [];
/* nums.forEach(function(n) {
    if (n % 5 === 0) {
        cincos.push(n);
    }
}) */
// nums.forEach(n => { // aca sigue mas de una linea de codigo, no se pueden evitar las {}
//         if (n % 5 === 0) {
//             cincos.push(n);
//         }
// });

// console.log(cincos);

// this
/* var bobAF = {
  name: "Bob",
  friends: ['Mary', 'John'],
  printFriends() {
    this.friends.forEach(f =>
      console.log(this.name + " knows " + f));
  }
} 
bobAF.printFriends();  */

// ahora lo mismo pero con una function comun:
/* var bobFC = {
    name: "Bob",
    friends: ['Mary', 'John'],
    printFriends() {
      this.friends.forEach(function(f) {
        console.log(this.name + " knows " + f);
      })
    } 
}
bobFC.printFriends();   */

// ----------------------------------------------
/* class Persona { 
    constructor (nombre = 'Franco', apellido = "Etcheverri"){
      this.nombre = nombre,
      this.apellido = apellido
    }
   
     getNombre() {  
       return this.nombre + " " + this.apellido;
     }
  } 
  
  class Empleado extends Persona { 
    constructor (nombre, apellido, empleo, sueldo){ 
      super(nombre, apellido); 
      this.empleo = empleo;
      this.sueldo = sueldo;
    }
  
    getEmpleo() {
      return this.empleo + "($" + this.sueldo + ")";
    }
  } 

let newEmpleado = new Empleado('Juan', 'Perez', 'Administrativo', 1000);
console.log(newEmpleado.getEmpleo());
console.log(newEmpleado.getNombre()); */

// --------------------------------------------------------------------------
// Object Literals  
/* function prueba1( nombre, edad) {
    return { 
        nombre,  
        edad       
    }
}
console.log(prueba1('Juan', 21)); 

// podemos lograr que se completen propiedades con su value en forma dinamica:
function prueba2( nombre, edad, prop, value) {
    return { prop, 
        nombre: nombre,  
        edad: edad,
        [prop]: value     
    }
}
console.log(prueba2('Juan', 21, 'altura', 1.75));
console.log(prueba2('Juan', 21, 'apellido', 'Perez'));
 */

// Templated Strings:

// antes:
// let nombre = 'Juan';
// let apellido = 'Perez';
// let edad = 21;
// 'Hola, soy Juan Perez y tengo 21 años'
// let str = 'Hola, soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.';
// console.log(str);  

// ahora: 
// una forma mas simple es usar  ` ( comilla inclinada)
// se escribe el texto entre esas comillas, y cada vez que necesitemos evaluar una variable
// se pone entre ${}--- aquello que no es literal, sino que la tengo que reemplazar ejecutando Js
// las encerramos entre ${}:
// let nombre = 'Juan';
// let apellido = 'Perez';
// let edad = 12;
// let str2 =  `Hola, soy ${nombre} ${apellido} y tengo ${edad} años.`;
// console.log(str2);

// ademas en este caso estoy ejecutando codigo: lo que este dentro de ${ es codigo Js, hasta podria poner un if aqui dentro!! }
// let str3 =  `Hola, soy ${nombre} ${apellido}
// y tengo ${edad - 5} años.`;
// console.log(str3);

// antes para tener un salto de linea necesitaba una expresion:
/* let strConSalto = 'Hola, soy ' + nombre + ' ' + apellido + '\ny tengo ' + edad + ' años.';
console.log(strConSalto); */

// aca para del salto de linea solo lo escribo en el siguiente renglon:
/* let str3ConSalto =  `Hola, soy ${nombre} ${apellido} y tengo ${edad - 5} años.`;
console.log(str3ConSalto); */

// veamos con un ternario dentro:
// let str4 =  `Hola, soy ${nombre} ${apellido} y tengo ${edad < 18 ? edad + 5 : edad - 5} años.`;
// console.log(str4);


// ----------------------------------------------------------
// Destructuring: agarramos un objeto y los desarmamos quedandonos con las variables que queremos!!

// list matching
// en lugar de:

// var a = 1;
// var b = 2;
// var c = 3;

// podemos hacer destructuring: aplicando a arreglos y objetos.

// var [a, , c] = [1,2,3]; 
// console.log(a); 
// //console.log(b); 
// console.log(c); 

// object matching

var obj = { 
    aaa: 'a', 
    bbb: { 
        bbb1: 'b' ,
        bbb2: 'c'
    }, 
    ddd: 'd'
} 
// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
// var {aaa,  ddd} = obj;
// console.log(aaa); 
// console.log(bbb); 
// console.log(ddd); 
// var {aaa, bbb : { bbb1 }, ddd} = obj;
//console.log(bbb1);

// console.log(bbb); 

//------------------------------------------------------------------------------

// Default + Rest + Spread

// valor por Default:

/* function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
  }
console.log(f(1))  */
  
// Rest operator:
// function f(x, ...y) {  
//     // y is an Array
//     console.log(y);
//     return x * y.length;
// }
// console.log(f(5, "hello", true, {a:'algo', b: 'otro'})) 

// spread operator:  

// function f(x, y, z) {
//     return x + y + z;
//   }
  //Pass each elem of array as argument
  // console.log(f(...[10,20,30])) 

  //antes: 
  // array = [10,20,30]
  // console.log(f(array[0], array[1], array[2]))  


// tambien sirve para generar copias de arrays:
// antes:
// var arr = ['a', 'b', 'c'];
// var arr2 = arr;  
// arr2.push(5);
// console.log(arr); 
// console.log(arr2); 

// para evitar esa copia donde se mofidifica el original hacer:
// var arr3 = [...arr];  
// arr3.push('hola')
// console.log(arr3); 
// console.log(arr); 


// sirve tambien para concatenar elementos:
// var array1 = ['hola', 'Buenas'];
// var array2 = [1,2,3];
// var array3 = [...array1, array2, false, 'sarasa', {name: 'Pepe', apellido: 'Sancho'}];
// console.log(array3); 

//-----------------------------------------------------------------
//Promesas:
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
  })
}

var p = timeout(1000).then(() => {
  return timeout(2000);
}).then(() => {
  console.log('Se cumplio');
}).catch(err => {
  console.log('No se cumplio');
})