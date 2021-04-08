var mongooose = require('mongoose');
var alumnos = require("../models/alumnos");

exports.list = async () => {

  var data = await alumnos.find({});
  return res.status(200).json(data);


};