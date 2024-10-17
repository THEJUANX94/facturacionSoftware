const { pool } = require('../database')

const getusuario = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuario');
    res.status(200).json(response.rows);
};

const getUsuariobyLogin = async (req, res) => {
    const login = req.params.login
    const response = await pool.query('SELECT * FROM usuario WHERE login = $1' , [login]);
    res.json(response.rows);
}

const createUsuario = async (req, res) => {
    const { login, clave, tipousuario, nit} = req.body;
    const response = await pool.query('INSERT INTO usuario (login, clave, tipousuario, nit) VALUES($1, $2, $3, $4)', [login, clave, tipousuario, nit]);
    console.log(response);
    res.json({
        message: 'Usuario añadido correctamente',
        body: {
            user: {login, clave, tipousuario, nit}
        }
    })
}

const deleteUsuario = async (req, res) => {
    const login = req.params.login
    const response = await pool.query('DELETE FROM usuario WHERE login = $1', [login])
    console.log(response);
    res.json('Usuario ${login} borrado')
}

const updateUsuario = async (req, res) => {
    const login = req.params.login
    const {tipousuario, clave} = req.body
    const response = await pool.query('UPDATE usuario SET tipousuario = $1, clave = $2 WHERE login = $3', [
        tipousuario, clave, login
    ])
    console.log(response);
    res.send('usuario actualizado')
}

module.exports = {
    getusuario,
    createUsuario,
    getUsuariobyLogin,
    deleteUsuario, 
    updateUsuario
}

