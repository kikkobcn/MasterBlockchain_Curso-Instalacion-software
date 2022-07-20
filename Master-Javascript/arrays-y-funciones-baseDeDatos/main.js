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

/*A traves de un loop FOR se recorre el array customers para poder acceder a los objetos que contiene, y por cada 
objeto accedemos, comn un  FOR ... IN,  a su respectiva propiedad */
let customers1 = [];
for (var i = 0; i < customers.length; i++) {
    for (var propiedad in customers[i]) {
        console.log('customers (i) es  ' + propiedad)
    }
}


