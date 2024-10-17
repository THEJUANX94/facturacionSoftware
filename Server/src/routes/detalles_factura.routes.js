const { Router } = require('express');
const router = Router();

const { getDetalle_Factura, createDetalle_Factura, getDetalle_Facturabyfactura, getDetalle_Facturabyproducto, deleteDetalle_Factura, updateDetalle_Factura } = require('../controller/detalle_factura.controller')

router.get('/detallefactura', getDetalle_Factura);
router.get('/detallefactura/:idfactura', getDetalle_Facturabyfactura);
router.get('/detallefactura/:idproducto', getDetalle_Facturabyproducto);
router.post('/detallefactura', createDetalle_Factura)
router.delete('/detallefactura/:idproducto:idfactura', deleteDetalle_Factura)
router.put('/detallefactura/:idproducto:idfactura', updateDetalle_Factura)

module.exports = router;