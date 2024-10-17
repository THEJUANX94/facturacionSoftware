const { pool } = require('../database')

const getDetalle_Factura = async (req, res) => {
    const response = await pool.query('SELECT * FROM detalle_factura');
    res.status(200).json(response.rows);
};

const getDetalle_Facturabyfactura = async (req, res) => {
    const idfactura = req.params.idfactura
    const response = await pool.query('SELECT * FROM detalle_factura WHERE idfactura = $1' , [idfactura]);
    res.json(response.rows);
}

const getDetalle_Facturabyproducto = async (req, res) => {
    const idproducto = req.params.idproducto
    const response = await pool.query('SELECT * FROM detalle_factura WHERE idproducto = $1' , [idproducto]);
    res.json(response.rows);
}

const createDetalle_Factura = async (req, res) => {
    const { idfactura, idproducto, cantidad, iva} = req.body;
    const response = await pool.query('INSERT INTO detalle_factura (idfactura, idproducto, cantidad, iva) VALUES($1, $2, $3, $4)', [idfactura, idproducto, cantidad, iva]);
    console.log(response);
    res.json({
        message: 'detalle de factura añadido correctamente',
        body: {
            detalle_factura: {idfactura, idproducto, cantidad, iva}
        }
    })
}

const deleteDetalle_Factura = async (req, res) => {
    const idproducto = req.params.idproducto
    const idfactura = req.params.idfactura
    const response = await pool.query('DELETE FROM detalle_factura WHERE (idproducto = $1 and idfactura = $2)', [idproducto, idfactura])
    console.log(response);
    res.json('Detalle de factura borrado correctamente')
}

const updateDetalle_Factura = async (req, res) => {
    const idproducto = req.params.idproducto
    const idfactura = req.params.idfactura
    const {cantidad, iva} = req.body
    const response = await pool.query('UPDATE detalle_factura SET cantidad = $1, iva = $2 WHERE (idproducto = $3 and idfactura = $4)', [
        cantidad, iva, idproducto, idfactura
    ])
    console.log(response);
    res.send('detalle de factura actualizado')
}

module.exports = {
    getDetalle_Factura,
    createDetalle_Factura,
    getDetalle_Facturabyfactura,
    getDetalle_Facturabyproducto,
    deleteDetalle_Factura, 
    updateDetalle_Factura
}

