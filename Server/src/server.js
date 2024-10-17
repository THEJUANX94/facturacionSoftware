const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(require('./routes/producto.routes'))
app.use(require('./routes/detalles_factura.routes'))
app.use(require('./routes/factura.routes'))
app.use(require('./routes/lote.routes'))
app.use(require('./routes/producto_lote.routes'))
app.use(require('./routes/persona.routes'))
app.use(require('./routes/usuario.routes'))


app.listen(4000, () => {console.log("Server started on port 5000")})