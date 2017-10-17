var mongoose = require('mongoose');
var _jedi = require('./models/jedi');
var _servidor = require('./servidor')

mongoose.connect('mongodb://localhost:27017', function (err, res) {
    if (err) console.log(err)
    else {
        crearModelos();
        _servidor.start();
    }
})
function crearModelos() {
    _jedi.remove({}, (err) => {
        console.log("Limpiar base de datos al arrancar")
      });
    new _jedi({
        Nombre: "Anakin",
        Color: "Azul",
        TipoEspada: "Simple"
    }).save(checkRespuesta)

    new _jedi({
        Nombre: "Yoda",
        Color: "Verde",
        TipoEspada: "Simple",
        MaestroJedi: true
    }).save(checkRespuesta)
}
function checkRespuesta(err, res) {
    if (err) console.log("Error: " + err)
    else console.log("Modelo guardado correctamente")
}