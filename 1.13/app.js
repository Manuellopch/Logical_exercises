const numero1 = 10,
     numero2 = '50',
     numero3 = 'tres';

let dato;
dato = Number("20");
dato = Number('20.1032');
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number((1,2,3,4,5));
//Parsefloat y ParseInt
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2012');
dato = parseInt('100.2012');

//tofixed
dato = 10.232323
dato1= '10.232323'
console.log(dato.toFixed());
console.log(dato.toFixed(3));
console.log(parseInt(dato1).toFixed(2));
console.log(parseFloat(dato1).toFixed(2));