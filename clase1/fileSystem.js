//const math = require('./math');
//math.suma(2345234,3456345);

const fs = require('fs');

fs.writeFile('texto.txt', 'Rellenando el txt de datos', function(err){
    if(err){
        console.log('Ha ocurrido un error');
    } else {
        console.log('Hemos creado y escrito el txt correctamente');
    }
});

console.log('Continuamos ejecutando el código sin que termine FileSystem');