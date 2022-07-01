//CONDICIONES
var a = 1
var b = 2

if (a == b) {                           // no a=b porque pondria a=2(como b)
    console.log('a es igual a b')
} else {
    console.log('a es distinto que b')  // "a != b"
}

if (a > b) {
    console.log('a es mayor que b')
} else {
    console.log('a es menor que b')  // "a <= b"
}

if (a >= b) {
    console.log('a es igual a b')
} else {
    console.log('a es menor o igual a b')  // "a <= b"
}

if (a <= b && a > b) {                      //a es menor o = b AND a es mayor que b)
    console.log('a es canor que b')
} else {
    console.log('al menos una condicion no se cumple')
}

if (a <= b || a > 0) {                      //a es menor o = b OR a es mayor que b)
    console.log('se cumple alguna condicion', a,b)
} else {
    console.log('no se cumple ninguna condicion')
}   

if (!(a <= b)) {           //nega que la condicion verdadera qeu a es menor o igual que b
    console.log('se cumple que a es > que b')
} else {
    console.log('al menos una condicion no se cumple')
}

//BUCLES
for (var i=0;i<10;i++) {           // console.log se repite 9 veces:
   	console.log(i)              //empieza desde que i vale 0, se añade 1(i++1) y se repite
}                               // hasta que i sea menor que 10.
console.log('fin del bucle')

for (var i = 0; i < 10; i++) {      //se repite tantas veces cuantos son los numeros(de 0 a 10)
    if (i % 2 == 0) {               //que son divisibles por 2(o sea con resto=0)
        console.log(i);             // aqui devuelve 0 2 4 6 8  
    }
}
console.log('fin del bucle')

//WHILE
var x = 1
while (x <= 10) {
    console.log(x);
    x++;
}