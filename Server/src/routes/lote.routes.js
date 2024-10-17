const { Router } = require('express');
const router = Router();

const { getLote, createLote, getLoteByidlote, deleteLote, updateLote } = require('../controller/lote.controller')

router.get('/lote', getLote);
router.get('/lote/:idlote', getLoteByidlote);
router.post('/lote', createLote)
router.delete('/lote/:idlote', deleteLote)
router.put('/lote/:idlote', updateLote)

module.exports = router;