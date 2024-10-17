const { pool } = require('../database')

const getPersona = async (req, res) => {
    const response = await pool.query('SELECT * FROM persona');
    res.status(200).json(response.rows);
};

const getPersonabyNIT = async (req, res) => {
    const nit = req.params.nit
    const response = await pool.query('SELECT * FROM persona WHERE nit = $1' , [nit]);
    res.json(response.rows);
}

const createPersona = async (req, res) => {
    const { nit, tiponit, nombre, apellidos, correo, genero} = req.body;
    const response = await pool.query('INSERT INTO persona (nit, tiponit, nombre, apellidos, correo, genero) VALUES($1, $2, $3, $4, $5, $6)', [nit, tiponit, nombre, apellidos, correo, genero]);
    console.log(response);
    res.json({
        message: 'User added succesfully',
        body: {
            user: {nit, tiponit, nombre, apellidos, correo, genero}
        }
    })
}

const deletePersona = async (req, res) => {
    const nit = req.params.nit
    const response = await pool.query('DELETE FROM persona WHERE nit = $1', [nit])
    console.log(response);
    res.json('User ${nit} deleted succesfully')
}

const updatePersona = async (req, res) => {
    const nit = req.params.nit
    const {tiponit, correo} = req.body
    const response = await pool.query('UPDATE persona SET tiponit = $1, correo = $2 WHERE nit = $3', [
        tiponit, correo, nit
    ])
    console.log(response);
    res.send('persona actualizada')
}

module.exports = {
    getPersona,
    createPersona,
    getPersonabyNIT,
    deletePersona, 
    updatePersona
}

