const pendientes = ['Dormir', 'Levantarse', 'Bañarse'];
/*for(let i = 0; i<pendientes.length; i++){
  console.log(`Los pendientes son: ${pendientes[i]}`);
}*/
//for each
pendientes.forEach(function(Pendiente, index){
 // console.log(`${index} : ${Pendiente}`);
});
const carrito = [
  {id: 1, prducto: 'Libro'},
  {id: 1, prducto: 'Lapiz'},
  {id: 1, prducto: 'Computadora'},
  {id: 1, prducto: 'Radio'}
];
const nomproducto = carrito.map(function(carrito){
  return carrito.prducto;
});
//console.log(nomproducto);

//in reservado de JavaScript
const automovil = {
  Modelo: 'Camaro',
  Motor: 6.1,
  Anio: 2020,
  Marca:'Chevrolet'
};
for(let auto in automovil){
  console.log(`${auto} : ${automovil[auto]}`);
}