const mongoose = require('mongoose')
const { mongodb_url } = require('../.env')

//conexão com o mongodb
mongoose.connect(mongodb_url, {
    useNewUrlParser: true , 
        useUnifiedTopology: true
}).then(() => {
    console.log('successful database connection')
}).catch((err) => {
    console.log('Error: Database connection not successful! Erro generated : " + erro)')
});
