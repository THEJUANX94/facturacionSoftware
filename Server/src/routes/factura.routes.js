const { Router } = require('express');
const router = Router();

const { getFactura, createFactura, getFacturaByID, deleteFactura } = require('../controller/factura.controller')

router.get('/factura', getFactura);
router.get('/factura/:idfactura', getFacturaByID);
router.post('/factura', createFactura)
router.delete('/factura/:idfactura', deleteFactura)

module.exports = router;