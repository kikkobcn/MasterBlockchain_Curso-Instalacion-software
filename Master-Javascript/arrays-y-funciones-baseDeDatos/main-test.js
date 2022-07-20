const fs = require('fs');
const Papa = require("papaparse")

function importar(filename){
const data = fs.readFileSync(filename, {encoding: 'utf-8', falg:'r'});
return Papa.parse(data, {
header:true,
dynamicTyping:true
})
}

var customers = importar('./datos/customers.csv').data 
var orders = importar('./datos/orders.csv').data
var orderDetails = importar('./datos/order_details.csv').data
var products = importar('./datos/products.csv').data

    var customers1 = [];                                //var para guardar el valor de la propiedad indicada en el IF
//                                                      //del hasOwnProperty     

for (var i = 0; i < customers.length; i++) {            // recorremos el array para acceder a los objects que contiene
    for (var propiedad in customers[i]) {               // a cada loop en la var propiedad se van metiendo las 
        console.log('customers (i) es  ' + propiedad)   // propiedades de los objetos con 'in' más el objeto al que se quiere acceder     
        if (customers[i].hasOwnProperty(propiedad)
            && propiedad === "city") {                  //control x ver si el objeto actual contiene esa propiedad con 'hasOwnProperty(valor)' 
            customers1.push(customers[i][propiedad]);   //y si la propiedad es igual a city
                                                        // agregamos el id al (array) customers1
        }
}
}
//console.log("#1 "+customers[0].city) // #1 forma de acceder directamente al valor del object dentro de un array

//console.log("#2 "+customers[0]["city"]) // #2 otra forma de acceder directamente al valor del object dentro de un array

//console.log("resultado :",customers1); // resultado: los valores de la propiedad city de los objetos de customers