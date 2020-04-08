const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('.')) //Para que o servidor sirva todos os arquivos estaticos, assim podendo utilizar requisições
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.listen(8080, () => console.log('server on'))


