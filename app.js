const express = require('express')
const app = express()
const path = require('path')
const data = require('./utils/data')
const head = require('./utils/head')
const title = 'Origen'


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('', (req, res) => {
    data.getAllDishes((error,data)=>{
        if(error){
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);
        return res.render('index',{
            title,
            JSONBody
        })
    })
})
// app.get('', (req, res)=>{
//     head.getHeaders((error, data) => {
//         if(error) {
//             return res.send(error);
//         }
//         const JSONHeader = JSON.parse(data);
//         //console.log(JSONHeader)
//         return res.render('index',{
//             JSONHeader : JSONHeader
//         })
//     })

// })



// app.get('/contacto', (req, res) => {
//     res.render('pages/contacto', {
//         title: 'E-Commerce | Contactos'
//     })
// })

// app.get('/nosotros', (req, res) => {
//     res.render('pages/nosotros', {
//         title: 'E-Commerce | Nosotros'
//     })
// })

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})