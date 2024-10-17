const { Router } = require('express');
const router = Router();

const { getProducto_lote, createProducto_lote, getProducto_lotebylote, getProducto_lotebyproducto, deleteProducto_lote, updateProducto_lote } = require('../controller/producto_lote.controller')

router.get('/productolote', getProducto_lote);
router.get('/productolote/:idlote', getProducto_lotebylote);
router.get('/productolote/:idproducto', getProducto_lotebyproducto);
router.post('/productolote', createProducto_lote)
router.delete('/productolote/:idproducto:idlote', deleteProducto_lote)
router.put('/productolote/:idproducto:idlote', updateProducto_lote)

module.exports = router;