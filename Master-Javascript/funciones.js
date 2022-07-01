function calcularAreaCuadrado(lado) {
    var area = lado * lado;
    return area
}
console.log(calcularAreaCuadrado(5));

//FUNCION Flecha
(lado) => {
    var area = lado * lado;
    return area                          
}
console.log(calcularAreaCuadrado(5));

//FUNCION Flecha reducida               //en la funcion flecha reducida no hace falta declarar
(lado) => lado * lado;                //una variable para luego retornarla, directamente la
                                     //
console.log(calcularAreaCuadrado(5));


const multi = (a, b) => {
    var c = a * b
    return c
}
console.log(multi(4, 5));

(a, b) => {
    var c = a * b
    return c
}
console.log(multi(4, 5));

(a, b) => a * b
console.log(multi(4,5));