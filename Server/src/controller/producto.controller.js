const { pool } = require('../database')

const getProducto = async (req, res) => {
    const response = await pool.query('SELECT * FROM producto');
    res.status(200).json(response.rows);
};

const getProductoByidproducto = async (req, res) => {
    const idproducto = req.params.idproducto
    const response = await pool.query('SELECT * FROM producto WHERE idproducto = $1' , [idproducto]);
    res.json(response.rows);
}

const createProducto = async (req, res) => {
    const { nombre, unidadmedida } = req.body;
    const response = await pool.query('INSERT INTO producto (nombre, unidadmedida) VALUES($1, $2)', [nombre, unidadmedida]);
    console.log(response);
    res.json({
        message: 'producto añadido correctamente',
        body: {
            producto: {nombre, unidadmedida}
        }
    })
}

const deleteProducto = async (req, res) => {
    const idproducto = req.params.idproducto
    const response = await pool.query('DELETE FROM producto WHERE idproducto = $1', [idproducto])
    console.log(response);
    res.json('prducto ${idproducto} borrado')
}

const updateProducto = async (req, res) => {
    const idproducto = req.params.idproducto
    const {nombre, unidadmedida} = req.body
    const response = await pool.query('UPDATE lote SET nombre = $1, unidadmedida = $2 WHERE idproducto = $3', [
        nombre, unidadmedida, idproducto
    ])
    console.log(response);
    res.send('Producto actualizado')
}

module.exports = {
    getProducto,
    createProducto,
    getProductoByidproducto,
    deleteProducto, 
    updateProducto
}

