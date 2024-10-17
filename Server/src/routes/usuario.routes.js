const { Router } = require('express');
const router = Router();

const { getusuario, createUsuario, getUsuariobyLogin, deleteUsuario, updateUsuario } = require('../controller/usuario.controller')

router.get('/usuario', getusuario);
router.get('/usuario/:login', getUsuariobyLogin);
router.post('/usuario', createUsuario)
router.delete('/usuario/:login', deleteUsuario)
router.put('/usuario/:login', updateUsuario)

module.exports = router;