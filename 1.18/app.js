const meses = new Array('Enero', 'Febrero', 'Marzo');
//console.log(Array.isArray(meses));
meses[3] = 'Abril';
meses.unshift('Mes 0');
meses.push('Mayo', 'Junio');
//quitar un elemento
meses.pop();
// quitar elemento de primero
meses.shift();
// quitar con rango
meses.splice(2,2);
//reversa
meses.reverse();
//console.log(meses);
//concatenar arreglos
let arreglo1 = [1,2,3,4,5],
     arreglo2 = [6,7,8,9,10];
     //console.log(arreglo1.concat(arreglo2));
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
frutas.sort();
//console.log(frutas);
let arreglo3 = [3,4,1,8,10,100];
arreglo3.sort(function(x, y){
     return x-y;
});
console.log(arreglo3);
