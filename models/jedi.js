var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Jedi', new Schema({
    Nombre: { type: String },
    Color: { type: String },
    TipoEspada: { type: String, enum: ['Doble', 'Simple'] },
    MaestroJedi: { type: Boolean, default: false }
}));
