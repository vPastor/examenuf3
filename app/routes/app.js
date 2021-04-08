const express = require('express');
const router = express.Router();
var asignaturasCtrl = require('../controllers/asignaturas');
var alumnosCtrl = require('../controllers/alumnos');
var docentesCtrl = require('../controllers/docentes');
router.get("/",function(req,res,next){
    res.render("chat.pug");
});

router.get("/asignatura/new",async function(req,res,next){
    var alums = await alumnosCtrl.list();
    var docents = await docentesCtrl.list();
    var data = [alums, docents];
    res.render("newAsignatura.pug",data);
});

router.get("/asignatura/save",async function(req,res,next){
    var res = await asignaturasCtrl.create(req);
    return res;
});


module.exports = router;