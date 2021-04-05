//objeto llamado Date
const diaHoy = new Date()
//Fecha en especifico Mes, Dia y año
//let navidad2017 = new Date('12-25-2017')
let valor;
//mes
valor = diaHoy.getMonth();
//Dia
valor = diaHoy.getDate();
valor = diaHoy.getDay();
//año
valor = diaHoy.getFullYear();
//Minutos
valor = diaHoy.getMinutes();
//Hora
valor = diaHoy.getHours();
//Milisegundos desde 1970
valor = diaHoy.getTime();
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2021);
valor = diaHoy.getFullYear();
console.log(valor);

