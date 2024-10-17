const { pool } = require('../database')

const getFactura = async (req, res) => {
    const response = await pool.query('SELECT * FROM factura');
    res.status(200).json(response.rows);
};

const getFacturaByID = async (req, res) => {
    const idfactura = req.params.idfactura
    const response = await pool.query('SELECT * FROM factura WHERE idfactura = $1' , [idfactura]);
    res.json(response.rows);
}

const createFactura = async (req, res) => {
    const { fecha, cliente, vendedor, tipopago} = req.body;
    const response = await pool.query('INSERT INTO factura (fecha, cliente, vendedor, tipopago) VALUES($1, $2, $3, $4)', [fecha, cliente, vendedor, tipopago]);
    console.log(response);
    res.json({
        message: 'Factura añadida correctamente',
        body: {
            factura: {fecha, cliente, vendedor, tipopago}
        }
    })
}

const deleteFactura = async (req, res) => {
    const idfactura = req.params.idfactura
    const response = await pool.query('DELETE FROM factura WHERE idfactura = $1', [idfactura])
    console.log(response);
    res.json('factura ${idfactura} borrada')
}

module.exports = {
    getFactura,
    createFactura,
    getFacturaByID,
    deleteFactura
}

