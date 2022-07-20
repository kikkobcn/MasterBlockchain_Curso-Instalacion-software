//ARRAY
const array = [3, 4, 5, 'string'];

// ARRAY   FOR...OF
for (value of array) {
    console.log(value);  }      // Resultado de FOR...OF: 3, 4, 5, 'string'

// ARRAY   FOR...IN
for (key in array) {
    console.log(key);}          // Resultado de FOR...IN : 0, 1, 2, 3 (posiciones en el array)

//--------------------------------------------------------------------------------
// OBJETO
const obj = {
    name: 'John',
    age: 20,
    city:'Madrid'
};
//OBJETO FOR...IN
for (key in obj) {
    console.log(key);}          // Resultado de FOR...IN : name, age, city

//OBJETO FOR...OF
for (value of obj) {
    console.log(value);}        // Resultado: TypeError: obj[Symbol.iterator] is not a function

