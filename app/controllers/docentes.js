var mongooose = require('mongoose');
var docentes = require("../models/docentes");

exports.list = async () => {

  var data = await docentes.find({});
  return res.status(200).json(data);

};