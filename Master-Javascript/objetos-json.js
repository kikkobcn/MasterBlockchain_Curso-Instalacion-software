/*Objetos:compuestos por: propiedades(race, name, age.....), 
con sus respectivos valores(Frenchbulldog, Daki, etc)
y metodos o sea lo que un objeto puede hacer(myDog.run(), myDog..eat()), etc)
*/
var myDog = {
    race: 'Frenchbulldog',
    name: 'Daki',
    age: 9,
    color: 'white'
};
//accedemos al objeto de estas formas:
console.log(myDog);             //{ race: 'Frenchbulldog', name: 'Daki', age: 9, color: 'white' }
console.log(myDog.race);        //Frenchbulldog
console.log(myDog.name);        //Daki
//o de esta forma
console.log(myDog['race']);     //Frenchbulldog
console.log(myDog['name']);     //Daki

var Dog = myDog;
console.log(Dog);               //{ race: 'Frenchbulldog', name: 'Daki', age: 9, color: 'white' }
//añadimos una propiedad:
Dog.weight = 15;
//de esta forma esta propiedad se añade tanto al objeto Dog como a MyDog
console.log(myDog);             //{ race: 'Frenchbulldog', name: 'Daki', age: 9, color: 'white', 15} 
console.log(Dog);               //{ race: 'Frenchbulldog', name: 'Daki', age: 9, color: 'white', 15}
//LOS DOS OBJETO APUNTAN A LA MISMA CELDA DE MEMORIA. !!!ATTENTION !!!

//JSON.parse:  analiza una cadena y la convierte en un objeto
/*JSON normalmente se usa para intercambiar datos hacia/desde un servidor web.
Al recibir datos de un servidor web, los datos siempre son una cadena.
JSON.parse analiza esa cadena y la convierte en un objeto Javascript.*/

var string = '{"name":"John", "age":30, "year":1980, "city":"New York"}';
var objeto = JSON.parse(string);
console.log(objeto);            //{ name: 'John', age: 30, year:1980, city: 'New York' }

//JSON.stringify   convierte un objeto en cadena
JSON.stringify(objeto);
console.log(objeto);            //{ name: 'John', age: 30, year:1980, city: 'New York' }

console.log(JSON.stringify({ fecha: new Date() }));     //{"fecha":"2022-06-30T12:46:17.599Z"}


//OBJETOS DENTRO DE OBJETOS CON DENTRO UN ARRAY
var factura = {
    numero: 123,
    fecha: new Date(2022, 0, 1),
    Cliente: {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    items: [
        {
        descripcion: 'Camiseta',
        precio: 50,
    },
        {
            descripcion: 'pantalones',
            precio: 70
        }]
};

console.log(JSON.stringify(factura));
//{"numero":123,"fecha":"2021-12-31T23:00:00.000Z","Cliente":{"nombre":"Juan","apellido":"Perez"},
//"items": [{ "descripcion": "Camiseta", "precio": 50 }, { "descripcion": "pantalones", "precio": 70 }]}






