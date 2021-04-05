//scoope
//variables Globales
var a = 'a';
let b = 'b';
const c = 'c';
//Funcion scope
function functionscope(){
  var a = 'A';
  let b = 'B';
  const c = 'C';
  console.log('SCOPE :' + a,b,c)
}
functionscope();
//scoope de bloque
if(true){
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('BLOQUE :' + a,b,c)
}
//for
for(var a = 0; a < 10; a++){
  console.log(a);
}

console.log('GLOBALES :' + a,b,c );