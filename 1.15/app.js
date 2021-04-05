const producto1 = 'Pizza',
     precio1 = 30,
     producto2 = 'Hamburguesa',
     precio2 = 40;

let html;
/*
html = '<ul>' + '<li>Orden' + producto1 + '</li>' + 
                    '<li>Precio ' + precio1 + '</li>' +
                    '<li>Orden: ' + producto2 + '</li>' +
                    '<li>Precio: ' + precio2 + '</li>' +
                    '<li>total: ' + (precio1 + precio2) + '</li>' +
                    '</ul>';
     document.getElementById('app').innerHTML = html; */

//template literals
html = 
     `<ul> 
          <li>Producto 1 :  ${producto1} </li>
          <li>Precio 1 : ${precio1} </li>
          <li>Producto 2 :  ${producto2} </li>
          <li>Precio 2 : ${precio2} </li>
          <li>Total : ${total (precio1, precio2)} </li>
     </ul>`;
function total(precio1, precio2){
     return precio1 + precio2;
}

 document.getElementById('app').innerHTML = html;