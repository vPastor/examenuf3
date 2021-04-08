var mongooose = require('mongoose');
var Schema = mongooose.Schema;
var docSchema = new Schema({
    _id: {type: Object},
    nombre: { type: String},
    apellido: { type: String}
})

module.exports = mongooose.model("docente",docSchema);