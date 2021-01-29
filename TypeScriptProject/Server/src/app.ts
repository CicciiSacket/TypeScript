console.log('exe')
const express =  require('express')
const bodyParser = require ('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
module.exports = app.listen(3005)

