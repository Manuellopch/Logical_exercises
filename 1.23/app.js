/*function saludar(NOMBRE){
     return `Hola ${NOMBRE}`;
}
let saludo = saludar('Homero');
console.log(saludo);*/

/*function saludar(NOMBRE){
     if(typeof NOMBRE === 'undefined'){NOMBRE = 'Extraño'};
     return `Hola ${NOMBRE}`
}
let saludo = saludar('Manuel');
console.log(saludo); 
function saludar(NOMBRE = 'Extraño'){
     return `Hola ${NOMBRE}`
}
let saludo = saludar();
console.log(saludo);
function suma(a = 1, b = 2){
     return a + b;
}
let sumar = suma(5);
console.log(sumar); */
function saludar(Nombre = 'Manuel', Apellido = 'Morales', Profesion = 'Web Developer'){
     return `Hola ${Nombre} ${Apellido} que se dedica a ${Profesion}`;
}
let saludo = saludar('Juan', 'Palacios', 'Albañil');
console.log(saludo);