const { pool } = require('../database')

const getProducto_lote = async (req, res) => {
    const response = await pool.query('SELECT * FROM producto_lote');
    res.status(200).json(response.rows);
};

const getProducto_lotebyproducto = async (req, res) => {
    const idproducto = req.params.idproducto
    const response = await pool.query('SELECT * FROM producto_lote WHERE idproducto = $1' , [idproducto]);
    res.json(response.rows);
}

const getProducto_lotebylote = async (req, res) => {
    const idlote = req.params.idlote
    const response = await pool.query('SELECT * FROM producto_lote WHERE idlote = $1' , [idlote]);
    res.json(response.rows);
}

const createProducto_lote = async (req, res) => {
    const { idlote, idproducto, cantidad, fechavencimiento} = req.body;
    const response = await pool.query('INSERT INTO producto_lote (idlote, idproducto, cantidad, fechavencimiento) VALUES($1, $2, $3, $4)', [idlote, idproducto, cantidad, fechavencimiento]);
    console.log(response);
    res.json({
        message: 'producto por lote añadido correctamente',
        body: {
            producto_lote: {idlote, idproducto, cantidad, fechavencimiento}
        }
    })
}

const deleteProducto_lote = async (req, res) => {
    const idproducto = req.params.idproducto
    const idlote = req.params.idlote
    const response = await pool.query('DELETE FROM producto_lote WHERE (idproducto = $1 and idlote = $2)', [idproducto, idlote])
    console.log(response);
    res.json('producto por lote borrado correctamente')
}

const updateProducto_lote = async (req, res) => {
    const idproducto = req.params.idproducto
    const idlote = req.params.idlote
    const {cantidad, fechavencimiento} = req.body
    const response = await pool.query('UPDATE producto_lote SET cantidad = $1, fechavencimiento = $2 WHERE (idproducto = $3 and idlote = $4)', [
        cantidad, fechavencimiento, idproducto, idlote
    ])
    console.log(response);
    res.send('producto por lote actualizado')
}

module.exports = {
    getProducto_lote,
    createProducto_lote,
    getProducto_lotebyproducto,
    getProducto_lotebylote,
    deleteProducto_lote, 
    updateProducto_lote
}

