const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes= require('./src/routes')




// framework express
const app = express();

//Para informar qual dominio pode estar consumir esta Api
app.use(cors());

app.use(cookieParser());

// Receber e enviar json do front end para back end
app.use(express.json());

app.use(routes)

app.get('/', function(req, res){
    res.json({message: 'Hello word'})
})





const port =  8080

//conexão com o mongodb
 mongoose.connect('mongodb://localhost:27017/ativy', {
    }).then(() => {
        console.log('successful database connection')
    }).catch((err) => {
        console.log('Error: Database connection not successful! Erro generated : " + erro)')
    });



app.listen(port, () => {
    console.log('server running on port '+port)
});