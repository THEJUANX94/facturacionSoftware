const { pool } = require('../database')

const getLote = async (req, res) => {
    const response = await pool.query('SELECT * FROM lote');
    res.status(200).json(response.rows);
};

const getLoteByidlote = async (req, res) => {
    const idlote = req.params.idlote
    const response = await pool.query('SELECT * FROM lote WHERE idlote = $1' , [idlote]);
    res.json(response.rows);
}

const createLote = async (req, res) => {
    const { fecharegistro } = req.body;
    const response = await pool.query('INSERT INTO lote (fecharegistro) VALUES($1)', [fecharegistro]);
    console.log(response);
    res.json({
        message: 'Lote añadido correctamente',
        body: {
            lote: {fecharegistro}
        }
    })
}

const deleteLote = async (req, res) => {
    const idlote = req.params.idlote
    const response = await pool.query('DELETE FROM lote WHERE idlote = $1', [idlote])
    console.log(response);
    res.json('lote ${idlote} borrado')
}

const updateLote = async (req, res) => {
    const idlote = req.params.idlote
    const {fecharegistro} = req.body
    const response = await pool.query('UPDATE lote SET fecharegistro = $1 WHERE idlote = $2', [
        fecharegistro, idlote
    ])
    console.log(response);
    res.send('lote actualizado')
}

module.exports = {
    getLote,
    createLote,
    getLoteByidlote,
    deleteLote, 
    updateLote
}

