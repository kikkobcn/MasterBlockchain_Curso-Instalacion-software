const fs = require('fs');
const Papa = require("papaparse")

function importar(filename){
const data = fs.readFileSync(filename, {encoding: 'utf-8', falg:'r'});
return Papa.parse(data, {
header:true,
dynamicTyping:true
})
}

var customers = importar('./Datos/customers.csv').data
var orders = importar('./Datos/orders.csv').data
var orderDetails = importar('./Datos/order_details.csv').data
var products = importar('./Datos/products.csv').data

console.log("customers", customers.lenght);
console.log("orders", orders.lenght);
console.log("ordersDetails", orderDetails.lenght);
console.log("products", products.lenght);