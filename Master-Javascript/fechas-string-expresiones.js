//Gestion FECHAS con MOMENT 
var moment = require("moment");
var ahora = moment.now();
var fechaDeHoy = moment(ahora).add(20, 'days') //para saber que dia será dentro de 20 dias
console.log(ahora, fechaDeHoy.toString());

//STRING
var texto = "0123456789";
console.log(texto.substring());
console.log(texto.substring(3));    //devuelve el texto desde la posicion 3(0 es el primer caracter)
console.log(texto.substring(3, 5));  //devuelve el texto desde la posicion 5(0 es el primer caracter)

//EXPRESIONES
var a = 20;
var b = 3;
var c = a + b;      //esta es una expresion
console.log(a, b, c);
console.log(Math.pow(a, 2));            //Math.pow --> elevar a potencia(a elvado a segunda potencia)
console.log(Math.sqrt(100, 2));         //Math.sqrt --> raiz cuadrada
console.log(Math.round(100.4));         //Math.round --> redondea por defecto (100)
console.log(Math.round(100.6));         //Math.round --> redondea por ecceso (101)
console.log(Math.abs(100));             //Math.abs --> devuelve el valor absoluto (100)
console.log(Math.abs(-100.6));          //Math.round --> devuelve el valor absoluto (100.6)
console.log(Math.min(100, 50, 200));    //Math.round --> devuelve el valor minimo (50)
console.log(Math.max(100, 6, 56, 87));  //Math.round --> devuelve el valor maximo(100)
console.log(Math.random() * 100);       //Math.random --> devuelve el valor random entre 1 y 100)
console.log(Math.random() * 100);       //Math.random --> devuelve el valor random entre 1 y 100)
console.log(Math.round(Math.random() * 100));  //Math.round(Math.random ..)--> devuelve el valor random entero
                                                //entre 1 y 100)
console.log(Math.round(Math.random() * 100) *100);  //Math.round(Math.random ..)--> devuelve el valor random
                                                    //entero entre 1 y 1000)   
                                                
var a = 15
var b = 3
var c = 4
console.log(a / b);
console.log(a * b);
console.log(a ** b);    //a elevado a b
console.log(a % b);     //a dividido b = 5 y devuelve el resto que es 0
console.log(a % c);     //a dividido c  / a cabe 3 veces con resto 2(que es lo que devuelve esta operacion)
                                                    

                                                



