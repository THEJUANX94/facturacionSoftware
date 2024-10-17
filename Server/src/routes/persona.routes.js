const { Router } = require('express');
const router = Router();

const { getPersona, createPersona, getPersonabyNIT, deletePersona, updatePersona } = require('../controller/persona.controller')

router.get('/persona', getPersona);
router.get('/persona/:nit', getPersonabyNIT);
router.post('/persona', createPersona)
router.delete('/persona/:nit', deletePersona)
router.put('/persona/:nit', updatePersona)

module.exports = router;