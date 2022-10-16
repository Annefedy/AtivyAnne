const mongoose = require('mongoose')
const { mongodb_url } = require('../.env')

//conexão com o mongodb
mongoose.connect('mongodb://localhost:27017/ativy', {
}).then(() => {
    console.log('successful database connection')
}).catch((err) => {
    console.log('Error: Database connection not successful! Erro generated : " + erro)')
});
