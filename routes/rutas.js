const express = require('express');
const router = express.Router();//funcion que depende de express y se almacena en router
const path=require('path');

//definimos las rutas y los manejadores

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname+"/../index.html"));
});

router.get("/saludo",(req, res)=>{
    res.sendFile(path.join(__dirname+"/../saludo.html"));
});

router.get("/despedida",(req, res)=>{
    res.sendFile(path.join(__dirname+"/../despedida.html"));
});

router.get("/alumno",(req, res)=>{
    res.sendFile(path.join(__dirname+"/../alumno.html"));
});

module.exports=router;