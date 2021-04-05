// objetos

const objeto = {
     Nombre: 'Miguel',
     Apellido: 'Palacios',
     Edad: 22,
     Profesion: 'Musico',
     Musica: ['Rock', 'Ska', 'Regeaton'],
     ubicacion: {
          Pais: 'Guatemala',
          Localisacion: 'Guadalajara'
     },
     nacimiento: function(){
          return new Date().getFullYear() - this.Edad;
     },
};
objeto.Musica.push('Trance');
console.log(objeto.nacimiento());
