const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

app.use(bodyParser.urlencoded({extended:true}))

app.use('/add-product', (req, res,next ) => 
    // res.send(fs.readFileSync(path.join(__dirname,'views','index.html')))
    fs.createReadStream(path.join(__dirname,'views','add-product.html')).pipe(res)
)

app.use('/save-product', (req, res,next ) =>{
    console.log('save product....'),
    console.log(req.body)
    res.send('Save succesfully')
    }
)

app.listen(port, () => console.log(`Example app listening on port port!`))