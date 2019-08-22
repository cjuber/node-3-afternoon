require('dotenv').config()

const express = require('express')
const cors = require('cors')
const massive = require('massive')

const productCtrl = require('./controller/products_controller')

const {
    CONNECTION_STRING, SERVER_PORT
}  = process.env

const app = express()


app.use(express.json())
app.use(cors())


massive(CONNECTION_STRING).then(dbInstance => {

    app.set('db', dbInstance)
    console.log('Database Connected')
    })
    .catch(err => console.log(err))


app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:id', productCtrl.getOne)
app.put('/api/products/:id', productCtrl.update)
app.post('/api/products', productCtrl.create)
app.delete('/api/products/:id', productCtrl.deleteProduct)


app.listen(SERVER_PORT, () => console.log('Server Running'))