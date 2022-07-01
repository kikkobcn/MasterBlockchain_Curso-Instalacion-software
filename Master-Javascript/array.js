var a = [1500, 325, 766, 10];

for (let x in a) {          //este bucle recorre todos los datos del array a y por cada uno
    console.log(x, a[x]);    //guarda en x el numero de la posicion dentro de a, y imprime el numero
}                            //de la posicion(x) y el dato que tiene esa posicion.
                            // 0 1500    1 325    2 766     3 10.

for (let x of a) {        //este bucle imprime SOLO los datos del array a (let x OF a)
    console.log(x,);     //sin el num de la posicion
}                         

for (const [i, v] of a.entries()) {   //aqui con el metodo entries() se crea un nuevo array
    console.log(i, v);                //donde el num de la posicion se guarda en la i, y los
                                        // valores en la variable v
}                                       //0 1500   1 325   2 766   3 10

