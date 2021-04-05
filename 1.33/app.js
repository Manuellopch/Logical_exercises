const ciudades = ['Londres', 'New York', 'Guatemala'];
const ordenes = new Set([123,231,345,456]);
const datos = new Map();
datos.set('Nombre', 'Juan');
datos.set('Profesion', 'Desarrollador Web');
/*console.log(ciudades);
console.log(ordenes);
console.log(datos);
//entries iterador
//entries a las ciudades
for(let entradas of ciudades.entries()){
 // console.log(entradas);
}
//entries ordenes
for(let entradas of ordenes.entries()){
   //console.log(entradas);
 }
 //entries datos
 for( let entradas of datos.entries() ){
     console.log(entradas);
 }
 //entries ordenes. values
for(let entradas of ordenes.values()){
    console.log(entradas);
}
// keys
for(let entradas of ciudades.keys()){
   console.log(entradas);
 }
 //defautl
 for(let entradas of ciudades){
     console.log(entradas);
 }
 for( let entradas of datos ){
     console.log(entradas);
 }
 //iterar string
 const mensaje = ('Aprendiendo JavaScript');
 for (let letra of mensaje){
    console.log(letra);
 }*/
 const enlaces = document.getElementsByTagName('a');
 for(let enlace of enlaces){
   console.log(enlace.href);
 }






