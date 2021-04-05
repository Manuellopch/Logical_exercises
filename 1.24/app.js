/*(function (tecnologia){
     console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');*/

const musica = {
     Reproducir: function(id) {
          console.log(`Reproduciendo ${id}`);
     },
     Pausa: function() {
          console.log('Musica en Pausa');
     }
}
//Los metodos Pueden crearse afuera del objeto
musica.borrar = function(id){
     console.log(`Borrando la cancion con el ID: ${id}`)
}
musica.Reproducir(30);
musica.Pausa();
musica.borrar(30);