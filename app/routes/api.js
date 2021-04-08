const express = require('express');
const router = express.Router();
var asignaturasCtrl = require('../controllers/asignaturas');


router.get("/API/v1/asignatura/list",async function(req,res,next){
    var res = await asignaturasCtrl.create(req);
    return res;
});


router.get("/API/v1/asignatura/save",async function(req,res,next){
    var data = await asignaturasCtrl.list();
    return res.jsonp(data);   ;
});

router.get("/API/v1/asignatura/delete",async function(req,res,next){
    var data = await asignaturasCtrl.delete(req);
    return res.jsonp(data);
});

router.get("/API/v1/asignatura/edit",async function(req,res,next){
    var data = await asignaturasCtrl.edit(req);
    return res.jsonp(data);
});



var docentesCtrl = require('../controllers/docentes');

router.get("/API/v1/docente/list",async function(req,res,next){
    var res = await docentesCtrl.create(req);
    return res;
});

router.get("/API/v1/docente/save",async function(req,res,next){
    var data = await docentesCtrl.list();
    return res.jsonp(data);   ;
});

router.get("/API/v1/docente/delete",async function(req,res,next){
    var data = await docentesCtrl.delete(req);
    return res.jsonp(data);
});

router.get("/API/v1/docente/edit",async function(req,res,next){
    var data = await docentesCtrl.edit(req);
    return res.jsonp(data);
});

var alumnosCtrl = require('../controllers/alumnos');

router.get("/API/v1/alumno/list",async function(req,res,next){
    var res = await alumnosCtrl.create(req);
    return res;
});

router.get("/API/v1/alumno/save",async function(req,res,next){
    var data = await alumnosCtrl.list();
    return res.jsonp(data);   ;
});

router.get("/API/v1/alumno/delete",async function(req,res,next){
    var data = await alumnosCtrl.delete(req);
    return res.jsonp(data);
});

router.get("/API/v1/alumno/edit",async function(req,res,next){
    var data = await alumnosCtrl.edit(req);
    return res.jsonp(data);
});
module.exports = router;