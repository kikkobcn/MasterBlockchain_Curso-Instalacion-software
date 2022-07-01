const edades = [10, 22, 25, 35];

function mediaEdades(edades) {
    var suma = 0;
    for (let edad of edades) {
        suma += edad;
    }
    var media = suma / edades.lenght;
    return media;
}
console.log(mediaEdades(edades));   


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

//function para calcular tot factura
function calcularTotal(factura) {
    var total = 0
    for (let item of factura.items) {
        total += item.precio;
    }
    return total
}
console.log(calcularTotal(factura));
