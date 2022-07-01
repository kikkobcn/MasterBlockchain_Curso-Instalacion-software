// FILTER
//El método filter() crea un nuevo array con todos los elementos del array de inicio(words)
//que cumplan la condición implementada por la función dada.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); //devuelve el Array  result["exuberant", "destruction", "present"] o sea
                    // array con las palabras que son mas largas de 6 caracteres
                    //(condicion indicada en la funcion del metodo filter()
                    
// MAP
//El método map() crea un nuevo array cuyo valores nacen del resultados de la función indicada 
//en el metoto map() que recorre cada elemento del array original.
var numbers = [1, 5, 10,45];
var doubles = numbers.map(function(x) {
   return x * 2;
});
console.log(doubles);  // nuevo array doubles es[2, 10, 20, 30] mientra que numbers sigue igual

var number = [1, 4, 9];
var roots = number.map(function(num) {
    return Math.sqrt(num);  
});
console.log(roots);     //// nuevo array roots es[2, 10, 20, 30] mientra que number sigue igual


//FILTER + MAP
var z = numbers.filter((num) =>  //con filter sacamos los datos que cumplan con la 
    num % 2 == 0).map((num) => {   // funcion(num%2==0 ) o sea que sean divisible por 2 y con el map
        return num * num;           // construyo un nuevo array con los datos obtenudos del filter 
    });                             // mutli`plicados por si mismos.
    console.log(z);


/*-------------------------------------------------------------------------------------------
REDUCE                            Devuelve la suma de todos los elemementos del array
la sintaxis es:
<VARIABLE>=<ARRAY NAME>.REDUCE(CALLBACK(ACUMULADOR,VALOR ACTUAL[, INDICE[,ARRAY]]),[VALOR INICIAL])
CALLBACK:           Función ke se ejecuta por cada elemanto del array, que recibe cuatro parámetros:
    ACUMULADOR:         acumula el valor que la funct callback devuelve
    VALORACTUAL:        El elemento actual que está siendo procesado en el array.
    INDICE(Optional):   El índice del elemento actual que está siendo procesado en el array. 
                        Es 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.
    ARRAY(opcional):    El array sobre el cual se llamó el método reduce().
    VALORINICIAL(opcional):es el primer valor del  primer argumento en la primera llamada de la función callback.*/
var t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];        //Se usa por ejemplo para hacer el total pedido.
var suma = t.reduce((acumulador, numero) => {
    console.log(acumulador, numero);
    return acumulador + numero;
}, 0)
console.log('suma es: '+ suma);
//Alternativa con un bucle:
var suma1 = 0;
for (var el of t) {
    suma1 += el
}
console.log('suma1 es :'+ suma1);
//_---------------------------------------------------------------------------------------------------
//FILTER + MAP + REDUCE
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = d.filter((nume) => nume % 2 == 0)
    .map((nume) => { return nume * nume; })
    .reduce((acumulador, nume) => { return acumulador + nume; }, 0);
console.log(suma);


//PUSH   Añade un elemento al array
var numeros = ['uno', 'dos', 'tres'];
console.log(numeros);
numeros.push('cuatro');
console.log(numeros);
//POP   Quita el ultimo elemento al array
numeros.pop();
console.log(numeros);
//UNSHIFT   Añade un elemtno en la primera posicion
numeros.unshift('cero');
console.log(numeros);
//SHIFT   Quita el primer elemento del array
numeros.shift();
console.log(numeros);


//ARRAY MULTIDIMENSIONALES  Son array que contienen otros arrays
//    Array      0                    2                             3
// Elemento    0  1  2      0         1          2            0       1         2
var matriz = [[1, 2, 3], ['lunes', 'martes', 'miercoles'], ['juan', 'maria', 'Pedro']];
//accedemos al array multidimensional:
console.log(matriz[1]);     //accedemos al array ['lunes', 'martes', 'miercoles']
console.log(matriz[2][1]);  // devuelve maria

//FIND
//Encuentra el primer elemento que cumple con la funcion indicada
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);     //devuelve 12


