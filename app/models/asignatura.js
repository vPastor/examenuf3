var mongooose = require('mongoose');
var Schema = mongooose.Schema;
var asSchema = new Schema({
    _id: {type: Object},
    nombre: { type: String},
    num_horas: { type: String},
    docente: { type: Object},
    alumnos: {type: [Object]}
})
module.exports = mongooose.model("asignatura",asSchema);