const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    dataNascimento: String,
    endereco: String
},{
    timestamps:true
});


DataSchema.pre('save',function(next){
    if(!this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha,10);
    next();
});

DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha+'';
    if(password.length<20){
        this.getUpdate().senha = bcrypt.hashSync(password,8);
    }
    next();
})

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;