const express = require('express')
const user = require('../user.model'); 
const connection = require("../conexion");
const { body, param, validationResult } = require('express-validator'); 

var router = express.Router();
/* router.get('/user', [], (req, res) => { user.getAll(connection, (data => {
res.json(data); }))
});  */

router.post('/user', [
    body('id').not().isEmpty().isString(),
    body('fecha').not().isEmpty().isString(),
    body('company').not().isEmpty().isString(),
    body('lista').not().isEmpty().isString(),
    body('puesto').not().isEmpty().isString(),
    body('exp').not().isEmpty().isString(),
    body('modalidad').not().isEmpty().isString(),
    body('sueldo').not().isEmpty().isString()

], (req, res) => {
    const errors = validationResult(req); if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
}
let body = req.body; user.create(connection, body, (data => {
res.json(data); }))
});

router.post('/baja', [
    body('id').not().isEmpty().isString(),

], (req, res) => {
    const errors = validationResult(req); if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
}
let body = req.body; user.baja(connection, body, (data => {
res.json(data); }))
});

router.post('/user2', [
    body('name').not().isEmpty().isString(),
    body('cuenta').not().isEmpty().isString(),
    body('correo').not().isEmpty().isString(),
    body('pass1').not().isEmpty().isString(),

], (req, res) => {
    const errors = validationResult(req); if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
}
let body = req.body; user.create2(connection, body, (data => {
res.json(data); }))
});

router.post('/reg', [
    body('company').not().isEmpty().isString(),
    body('fecha').not().isEmpty().isString(),
    body('lista').not().isEmpty().isString(),
    body('puesto').not().isEmpty().isString(),
    body('exp').not().isEmpty().isString(),
    body('modalidad').not().isEmpty().isString(),
    body('sueldo').not().isEmpty().isString()

], (req, res) => {
    const errors = validationResult(req); if (!errors.isEmpty()) {
    res.json({success:false,err:JSON.stringify(errors)})
    return
}
let body = req.body; user.create(connection, body, (data => {
res.json(data); }))
});

router.get('/user', [], (req, res) => {

    user.getAll(connection, (data => {

        res.json(data);

    }))

 });

module.exports = router;