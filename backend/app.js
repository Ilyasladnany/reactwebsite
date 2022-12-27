const express = require('express')
const app = express()

app.get('/',(req,res)=>{
        res.send('<h2> Bonjour Express </h2>')
})

//----------------Api---------------------
app.use(express.json())
const product_routes = require('./routes/productRoutes')
app.use('/api/v1',product_routes)

module.exports = app
